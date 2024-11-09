// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; // To tell solidity what compiler you expect
// We need to put this in every file of our contract. It is kind of package.json

contract HelloWorld {

  function hello() public pure returns (string memory) {
    return "Hello, World";
  }
}
