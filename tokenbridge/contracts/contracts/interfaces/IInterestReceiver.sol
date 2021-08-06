pragma solidity 0.4.26;

interface IInterestReceiver {
    function onInterestReceived(address _token) external;
}
