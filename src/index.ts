import { ethers } from "ethers";

function getEth() {
    const eth = window.ethereum;
    if (!eth) {
        throw new Error("No ethereum provider found");
    }
    return eth;
}

async function hasAccounts() {
    const eth = getEth();
    const accounts = await eth.request({ method: "eth_accounts" }) as string[];
    return accounts.length > 0;
}

async function requestAccounts() {
    const eth = getEth();
    return await eth.request({ method: "eth_requestAccounts" });
}

async function run() {
    if (!await hasAccounts() && !await requestAccounts()) {
        throw new Error("Please let me take your money");
    }

    const hello = new ethers.Contract(
        "0x5fbdb2315678afecb367f032d93f642f64180aa3",
        [
            "function hello() public pure returns (string memory)"
        ],
        new ethers.providers.Web3Provider(getEth()),
    )

    document.body.innerHTML = await hello.hello();
}

run()