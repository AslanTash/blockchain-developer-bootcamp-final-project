pragma solidity >=0.6.0 <0.9.0;

contract Slots {
    address public owner;
    mapping (address => uint) private balances;
    mapping (address => uint) private membershipBalances;
    uint private losses;

    // @return the balance of the user
    function getBalance() {}
    
    // deposit a given amount of Slot tokens to improve membership level
    function deposit() {}

    // withdraws from the membership balances
    function withdraw() {}

    // gets the current membership level of the user
    function getMembership() {}

    // spins the slot machine and rewards the user with any winnings
    function play() {}

    // distributeLosses will redistribute the accumulated losses to members.
    function distributeLosses() {}
}
