import React, { useEffect } from "react";
import { ethers } from "ethers";
import "./App.css";

const App = () => {
  const checkIfWalletIsConnected = () => {
    /*
    * First make sure we have access to window.ethereum
    */
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
    } else {
      console.log("We have the ethereum object", ethereum);
    }
  }
}

  // /*
  // * This runs our function when the page loads.
  // */

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

      <button className="likeButton" onClick={wave}>
        Like This Page 👍🏼
      </button>
    </div>
  </div>
);
}

export default App
