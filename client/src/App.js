import abi from "src/path/to/Tickets.json";

import { useState, useEffect } from "react";
import { ethers } from "ethers";
import "./App.css";
require("dotenv").config();

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = process.env.CONTRACT_ADDRESS;
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;
        if (ethereum) {
          //this is done so that metamask can connect to our dapp when we click on connect wallet
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });
        }
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setState({ provider, signer, contract });
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  });
  return <div className="App">"Hello World"</div>;
}

export default App;
