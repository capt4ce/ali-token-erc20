pragma solidity ^0.4.24;

import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract AliToken is StandardToken {
    string public name = "AliToken";
    string public symbol = "ALI";
    uint8 public decimals = 2;

    uint256 public INITIAL_SUPPLY = 1000000;

    constructor() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
}
