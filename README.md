Slide link: https://theprimeagen.github.io/web3-smart-contracts/your-first-contract#your-first-contract

# Folder Structure of Smart Contract
```bash
- contracts
    - YourContract.sol
    # Your contract solidity files / code
- scripts
    - deploy.ts
    # Your deployment typescript files / code
- test
    - yourContract.test.js
    # Your test files / code
```

- Hardhat is a tool for building and deploying smart contracts to any ethereum network.
- Metamask is a browser plugin for wallets. It is both a signer and a provider.
- Signer: is the ability to make a state changing transaction.
- Provider: is the ability to call to a network and read functions that don't alter state.