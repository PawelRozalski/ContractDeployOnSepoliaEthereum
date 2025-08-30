// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MyFirstContract {
    string public message;

    constructor() {
        message = "Hello, world!";
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
