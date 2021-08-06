pragma solidity 0.4.26;

interface IAMBInformationReceiver {
    function onInformationReceived(bytes32 messageId, bool status, bytes result) external;
}
