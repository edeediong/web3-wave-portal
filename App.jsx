import React, { useEffect } from "react";
import { ethers } from "ethers";
import "./App.css";

const App = () => {
    /*
  * Just a state variable we use to store our user's public wallet.
  */
  const [currentAccount, setCurrentAccount] = useState("");
  
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
        console.log("We have the ethereum object", ethereum);
      }

      /*
      * Check if we're authorized to access the user's wallet
      */
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account)
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  /*
  * This runs our function when the page loads.
  */
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">
        🤓 Hey there Spotify Lover!
        </div>

        <div className="bio">
        I am Eddie and I do Software Engineering (mostly Infrastructure stuff) at Tellie. I also love Spotify!! Connect your Ethereum wallet and drop a like!
        </div>

        <button className="likeButton" onClick={null}>
          Like This Page 👍🏼
        </button>
      </div>
    </div>
  );
}

export default App