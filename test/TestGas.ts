import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("TestGas", function() {
    it("Test", async function () {
        // 1. setup // the imports we did in this file
        // 2. deploy our contract
        // 3. call our functions to test

        // 2.
        const Gas = await ethers.getContractFactory("TestGas");
        const gas = await Gas.deploy(); // deploys it to the network
        await gas.deployed(); //  ensures that your contract has been confirmed to be deployed by the network

        for (let i = 0; i < 10; i++) {
            await gas.test1();
            await gas.test2();
            await gas.test3();
            await gas.test4();
            await gas.test5();
        }
    })
})