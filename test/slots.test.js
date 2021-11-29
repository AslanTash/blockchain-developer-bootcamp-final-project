let BN = web3.utils.BN;
let Slots = artifacts.require("Slots");
let { catchRevert } = require("./exceptionsHelpers.js");
const { isPayable } = require("./ast-helpers");

contract("Slots", function (accounts) {
    const [_owner, alice, bob] = accounts;
    const emptyAddress = "0x0000000000000000000000000000000000000000";

    let instance;

    beforeEach(async () => {
        instance = await Slots.new(1);
    });

    describe("Variables", () => {
        it("should have an owner", async () => {
            assert.equal(typeof instance.owner, 'function', "the contract has no owner");
        });
        it("should have a bronze membership", async () => {
            assert.equal(typeof instance.bronzeMembership, 'function', "the contract has no bronze membership");
        });
        it("should have a silver membership", async () => {
            assert.equal(typeof instance.silverMembership, 'function', "the contract has no silver membership");
        });
        it("should have a gold membership", async () => {
            assert.equal(typeof instance.goldMembership, 'function', "the contract has no gold membership");
        });
    });

    describe("Use cases", () => {
        

        it("should receive 1000000 tokens", async () => {
            await instance.getTokens({from : alice});

            var balance = await instance.getBalance.call(alice);

            assert.equal(
                balance.toString(),
                "1000000",
                "balance not updated",
            );
        });

        it("should obtain bronze membership", async () => {
            await instance.getTokens({from : alice});
            await instance.stake("10000", {from : alice});

            var membership = await instance.getMembership.call(alice);

            assert.equal(
                membership.toString(),
                "1",
                "membership should be bronze",
            );
        });
        it("should obtain silver membership", async () => {
            await instance.getTokens({from : alice});
            await instance.stake("100000", {from : alice});

            var membership = await instance.getMembership.call(alice);

            assert.equal(
                membership.toString(),
                "2",
                "membership should be silver",
            );
        });
        it("should obtain gold membership", async () => {
            await instance.getTokens({from : alice});
            await instance.stake("1000000", {from : alice});

            var membership = await instance.getMembership.call(alice);

            assert.equal(
                membership.toString(),
                "3",
                "membership should be gold",
            );
        });

        it("should spin as owner", async () => {
            /*
                Starting balance: 1
                Get: 1,000,000
                Play: 100,000
                Win: 1900 * 100,000 / 100 * 96 / 100
             */
            await instance.getTokens({from : _owner});
            await instance.spinOwner(100000, {from : _owner});

            var balance = await instance.getBalance.call(_owner);

            assert.equal(
                balance.toString(),
                "2724001",
                "incorrect balance",
            );
        });

        it("should spin as owner with gold membership", async () => {
            await instance.getTokens({from : _owner});
            await instance.getTokens({from : _owner});
            await instance.stake(1000000, {from : _owner});
            await instance.spinOwner(100000, {from : _owner});

            var balance = await instance.getBalance.call(_owner);

            assert.equal(
                balance.toString(),
                "2781001",
                "incorrect balance",
            );
        });

        it("should reduce membership", async () => {
            await instance.getTokens({from : alice});
            await instance.stake(100000, {from : alice});

            var membership = await instance.getMembership.call(alice);

            assert.equal(
                membership.toString(),
                "2",
                "membership should be silver",
            );

            await instance.unstake(1, {from : alice});

            membership = await instance.getMembership.call(alice);

            assert.equal(
                membership.toString(),
                "1",
                "membership should be bronze",
            );
        });

    });

});
