pragma solidity 0.4.26;

contract ERC677Receiver {
    function onTokenTransfer(address _from, uint256 _value, bytes _data) external returns (bool);
}
