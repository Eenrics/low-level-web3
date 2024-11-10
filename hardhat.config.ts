// import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-waffle";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    hardhat: {
      // accounts: {
      //   mnemonic: 1234,
      // },
      chainId: 1337,
    },
  },
};
