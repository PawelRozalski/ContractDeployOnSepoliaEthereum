// This code can be used under the MIT license

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// contract in Solidity = this like a object
contract MyFirstContract {
    string public message;

    // constructor create start value visibility on blockchain (storage)
    constructor() {
        message = "Hello, world!";                  // constructor perform when command deploy start - here get my gas (STORAGE)
    }

    // public function to change message, anyone can call it
    function setMessage(string memory newMessage) public {                          // when someone change message - here someone pay the gas (STORAGE)
        // overwrite message variable in storage by new massage from new user
        // the parameter "newMessage" exists temporarily in memory
        message = newMessage;
    }
}
