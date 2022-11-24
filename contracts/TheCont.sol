// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TheCont is ERC20 {

    string aString;

    constructor() ERC20("TheCont", "TC") {
        aString = "This is the contract!";
    }

    function createIt() public view returns(string memory) {
        return aString;
    }
}