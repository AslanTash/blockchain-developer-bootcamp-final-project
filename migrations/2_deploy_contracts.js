const Slots = artifacts.require("./Slots.sol");

module.exports = function(deployer, initialAmount) {
  deployer.deploy(Slots, 1000000);
};
