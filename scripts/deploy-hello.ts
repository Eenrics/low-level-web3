import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

export async function deploy() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld") // "HelloWorld" is the name of the contract not the name of the file
    const hello = await HelloWorld.deploy()
    await hello.deployed()

    return hello
}

export async function sayHello(hello) {
    console.log("Say Hello: ", await hello.hello())
}