// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract MusicLover {
    uint256 totalLikes;

    constructor() {
        console.log("My favorite music app is Spotify");
    }

    function like() public {
        totalLikes += 1; // State variable
        console.log("%s has liked!", msg.sender);
    }

    function getTotalLikes() public view returns (uint256) {
        console.log("We have %d total likes!", totalLikes);
        return totalLikes;
    }
}