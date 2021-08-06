pragma solidity 0.4.26;

interface IMediatorFeeManager {
    function calculateFee(uint256) external view returns (uint256);
}
