// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract Slots is ERC20, VRFConsumerBase {
    address public owner;
    enum MembershipLevel { None, Bronze, Silver, Gold }
    mapping (address => uint256) private staked;
    mapping (address => MembershipLevel) private memberships;
    mapping (string => uint256) private combinations;
    uint256 public totalStaked;

    uint256 public bronzeMembership;
    uint256 public silverMembership;
    uint256 public goldMembership;

    string finalCombination;

    // VRFConsumerBase variables
    bytes32 internal keyHash;
    uint256 internal fee;
    
    uint256 public randomResult;
    
    constructor(uint256 initialSupply) ERC20("Slots", "SLOTS") 
        VRFConsumerBase(
            0xdD3782915140c8f3b190B5D67eAc6dc5760C46E9,
            0xa36085F69e2889c224210F603D836748e7dC0088
        ) 
    {
        _mint(msg.sender, initialSupply);
        bronzeMembership = 10000;
        silverMembership = 100000;
        goldMembership = 1000000;


        /*
            Slot machine has 3 reels: [1,2,3,4,2] , [1,2,3,4,3] , [1,2,3,2]
            Payouts are as follows
            Total unique combinations: 5 * 5 * 4 = 100
            Total sum of payouts for all cimbinations: 99
         */
         
        combinations["111"] = 1900;
        combinations["211"] = 25;
        combinations["212"] = 25;
        combinations["213"] = 25;
        combinations["221"] = 100;
        combinations["222"] = 300;
        combinations["223"] = 100;
        combinations["231"] = 25;
        combinations["232"] = 25;
        combinations["233"] = 25;
        combinations["241"] = 25;
        combinations["242"] = 25;
        combinations["243"] = 25;
        combinations["333"] = 1000;
        combinations["441"] = 400;
        combinations["442"] = 400;
        combinations["443"] = 400;

        owner = msg.sender;
    }

    /** 
     * Requests randomness 
     */
    function getRandomNumber() public returns (bytes32 requestId) {
        require(LINK.balanceOf(address(this)) >= fee, "Not enough LINK - fill contract with faucet");
        return requestRandomness(keyHash, fee);
    }
    /**
     * Callback function used by VRF Coordinator
     */
    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
        randomResult = randomness;
    }


    // Events
    event LogStake(uint256 amount);
    event LogUnstake(uint256 amount);
    event LogSpin(uint256 amount);
    

    

    modifier enoughFunds(uint256 _amount) {
        require(super.balanceOf(msg.sender) >= _amount);
        _;
    }

    modifier enoughStaked(uint256 _amount) {
        require(staked[msg.sender] >= _amount);
        _;
    }

    modifier minMaxAmount(uint256 _amount) {
        require(_amount >= 1000);
        require(_amount <= 1000000);
        _;
    }

    modifier isOwner(address _address) {
        require (owner == _address);
        _;
    }

    function setMembership() private {
        memberships[msg.sender] = MembershipLevel.None;
        if (staked[msg.sender] >= bronzeMembership) {
            memberships[msg.sender] = MembershipLevel.Bronze;
        }
        if (staked[msg.sender] >= silverMembership) {
            memberships[msg.sender] = MembershipLevel.Silver;
        }
        if (staked[msg.sender] >= goldMembership) {
            memberships[msg.sender] = MembershipLevel.Gold;
        }
    }

    function getMembership(address _member) public view returns (uint level) {
        return uint(memberships[_member]);
    }

    function getBalance(address _member) public view returns (uint256 balance) {
        return super.balanceOf(_member);
    }

    function getMembershipMultiplier() private view returns (uint256) {
        if (memberships[msg.sender] == MembershipLevel.Gold) return 99;
        if (memberships[msg.sender] == MembershipLevel.Bronze) return 97;
        if (memberships[msg.sender] == MembershipLevel.Silver) return 98;
        else return 96;
    }

    function stake(uint256 amount) public payable enoughFunds(amount) {
        _burn(msg.sender, amount);
        staked[msg.sender] += amount;
        totalStaked += amount;
        setMembership();
        emit LogStake(amount);
    }

    function unstake(uint256 amount) public payable enoughStaked(amount) {
        staked[msg.sender] -= amount;
        totalStaked -= amount;
        _mint(msg.sender, amount);
        setMembership();
        emit LogUnstake(amount);
    }

    function convertToCombination(uint a) private pure returns (string memory) {
        if (a == 1) return "1";
        if (a == 2) return "2";
        if (a == 3) return "3";
        if (a == 4) return "4";
        else return "";
    }

    function spin(uint256 amount) public payable enoughFunds(amount) minMaxAmount(amount) {
        _burn(msg.sender, amount);

        getRandomNumber();
        uint a = (randomResult / 10) % 4 + 1;
        uint b = (randomResult / 100) % 4 + 1;
        uint c = (randomResult / 1000) % 3 + 1;

        string memory first = convertToCombination(a);
        string memory second = convertToCombination(b);
        string memory third = convertToCombination(c);

        finalCombination = string(abi.encodePacked(first, second, third));
        
        uint256 win = combinations[finalCombination];
        uint256 winAmount = win * amount / 100;
        uint256 multiplier = getMembershipMultiplier();
        _mint(msg.sender, winAmount * multiplier / 100);
    }

    function getTokens() public payable {
        _mint(msg.sender, 1000000);
    }

    function spinOwner(uint256 amount) public payable enoughFunds(amount) minMaxAmount(amount) {
        _burn(msg.sender, amount);
        uint256 win = combinations["111"];
        uint256 winAmount = win * amount / 100;
        uint256 multiplier = getMembershipMultiplier();
        _mint(msg.sender, winAmount * multiplier / 100);
    }
}
