import { ethers } from "ethers";
import Counter from "../artifacts/contracts/Counter.sol/Counter.json";

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

    const counter = new ethers.Contract(
        // "0x5fbdb2315678afecb367f032d93f642f64180aa3",
        process.env.CONTRACT_ADDRESS!,
        // [
        //     // "function hello() public pure returns (string memory)"
        //     "function count() public",
        //     "function getCounter() public view returns (uint)",
        // ],

        Counter.abi,
        new ethers.providers.Web3Provider(getEth()).getSigner(), // (new ethers.providers.Web3Provider(getEth())) a provider tells where the network is (basic communication)
        // (getSigner()) a signer accesses the wallet information and allows requests to be signed by the user.
    )

    const el = document.createElement("div");
    async function setCounter(count?) {
        el.innerHTML = count || await counter.getCounter();
    }
    setCounter();

    const button = document.createElement("button");
    button.innerHTML = "Increment";
    button.onclick = async () => {
        // const tx = await counter.count();
        // await tx.wait()
        // setCounter();

        // Better to do it with contract events
        await counter.count();
    }

    counter.on(counter.filters.CounterInc(), function(count) {
        setCounter(count)
    })

    // document.body.innerHTML = await counter.hello();
    document.body.appendChild(el);
    document.body.appendChild(button);
}

run()