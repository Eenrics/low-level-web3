import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("hello world", function() {
    it("should say hi", async function () {
        // 1. setup // the imports we did in this file
        // 2. deploy our contract
        // 3. call our functions to test

        // 2.
        const HelloWorld = await ethers.getContractFactory("HelloWorld");
        const hello = await HelloWorld.deploy(); // deploys it to the network
        await hello.deployed(); //  ensures that your contract has been confirmed to be deployed by the network

        // 3.
        expect(await hello.hello()).to.equal("Hello, World");
    })
})