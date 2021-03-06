const slotsABI = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "initialSupply",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "LogSpin",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "LogStake",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "LogUnstake",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "bronzeMembership",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "goldMembership",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "randomResult",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "randomness",
          "type": "uint256"
        }
      ],
      "name": "rawFulfillRandomness",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "silverMembership",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalStaked",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getRandomNumber",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "requestId",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_member",
          "type": "address"
        }
      ],
      "name": "getMembership",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "level",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_member",
          "type": "address"
        }
      ],
      "name": "getBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "stake",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "unstake",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "spin",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTokens",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "spinOwner",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ]
const slotsContract = '0xB1873DE0392fc328bce2B2B265A890490B3fD1d9'

const getTokensButton = document.getElementById('get-tokens');
const spinButton = document.getElementById('spin-1000');
const spinAdmin = document.getElementById('spin-admin');
const gotTokens = document.getElementById('got-tokens');
const spinResult = document.getElementById('result');
const stake = document.getElementById('stake');
const unstake = document.getElementById('unstake');
window.addEventListener('load', function () {
    // Check for MetaMask
    if (typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask === true) {
        console.log('window.ethereum is enabled')
        console.log('MetaMask is active')
        let mmDetected = document.getElementById('mm-detected')
        mmDetected.innerHTML += 'MetaMask is available'
    } else {
        mmDetected.innerHTML = 'MetaMask is not available'
        this.alert('Please install MetaMask to use this dapp')
        // window.web3 = new Web3(
        //     new Web3.providers.HttpProvider('http://localhost:8545')
        // );
    }
    getTokensButton.style.display = "none";
    spinButton.style.display = "none";
    spinResult.style.display = "none";
    spinAdmin.style.display = "none";
    stake.style.display = "none";
    unstake.style.display = "none";
});

const mmEnable = document.getElementById('mm-connect');
const mmCurrentAccount = document.getElementById('mm-current-account');
mmDetected = document.getElementById('mm-detected')
const balanceElement = document.getElementById('slots-balance');

mmEnable.onclick = async () => {
    await ethereum.request({ method:
    'eth_requestAccounts'})
    mmEnable.style.display = "none";
    mmDetected.style.display = "none";
    getTokensButton.style.display = "inline";
    spinButton.style.display = "inline";
    spinResult.style.display = "block";
    spinAdmin.style.display = "inline";
    stake.style.display = "inline";
    unstake.style.display = "inline";

    mmCurrentAccount.innerHTML = 'Your address: ' + ethereum.selectedAddress

    var web3 = new Web3(window.ethereum)
    const slots = new web3.eth.Contract(slotsABI, slotsContract)
    var slotsBalance = await slots.methods.getBalance(ethereum.selectedAddress).call()
    balanceElement.innerHTML = 'Your SLOTS token balance: ' + slotsBalance

}

spinButton.onclick = async () => {
    var web3 = new Web3(window.ethereum)
    const slots = new web3.eth.Contract(slotsABI, slotsContract)

    await slots.methods.spin(1000).send({from : ethereum.selectedAddress})
}

getTokensButton.onclick = async () => {
    gotTokens.innerHTML = 'Processeing get tokens...'
    var web3 = new Web3(window.ethereum)
    const slots = new web3.eth.Contract(slotsABI, slotsContract)
    slots.setProvider(window.ethereum);
    var metadata = await slots.methods.getTokens().send({from : ethereum.selectedAddress});
    console.log(metadata)
    if (metadata[code] == 4001) gotTokens.innerHTML = 'Rejected';
    gotTokens.innerHTML = 'Received 1000000 SLOTS!'
    var slotsBalance = await slots.methods.getBalance(ethereum.selectedAddress).call()
    balanceElement.innerHTML = 'Your SLOTS token balance: ' + slotsBalance
}

spinAdmin.onclick = async () => {
    spinResult.innerHTML = "spinning...";
    var web3 = new Web3(window.ethereum)
    const slots = new web3.eth.Contract(slotsABI, slotsContract)
    slots.setProvider(window.ethereum)
    var balanceBefore = await slots.methods.getBalance(ethereum.selectedAddress).call()
    var metadata = await slots.methods.spinOwner(1000).send({from : ethereum.selectedAddress})
    console.log(metadata)
    var balanceAfter = await slots.methods.getBalance(ethereum.selectedAddress).call()
    var win = balanceAfter - balanceBefore
    spinResult.innerHTML = "You spun 111 and won " + win
    balanceElement.innerHTML = 'Your SLOTS token balance: ' + balanceAfter
}

stake.onclick = async () => {
    spinResult.innerHTML = "staking..."
    var web3 = new Web3(window.ethereum)
    const slots = new web3.eth.Contract(slotsABI, slotsContract)
    slots.setProvider(window.ethereum)
    var metadata = await slots.methods.stake(100000).send({from : ethereum.selectedAddress})
    console.log(metadata)
    var balanceAfter = await slots.methods.getBalance(ethereum.selectedAddress).call()
    spinResult.innerHTML = "staked 100000"
    balanceElement.innerHTML = 'Your SLOTS token balance: ' + balanceAfter
}

unstake.onclick = async () => {
    spinResult.innerHTML = "unstaking..."
    var web3 = new Web3(window.ethereum)
    const slots = new web3.eth.Contract(slotsABI, slotsContract)
    slots.setProvider(window.ethereum)
    var metadata = await slots.methods.unstake(100000).send({from : ethereum.selectedAddress})
    console.log(metadata)
    var balanceAfter = await slots.methods.getBalance(ethereum.selectedAddress).call()
    spinResult.innerHTML = "unstaked 100000"
    balanceElement.innerHTML = 'Your SLOTS token balance: ' + balanceAfter
}
