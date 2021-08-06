pragma solidity 0.4.26;

interface IUpgradeabilityOwnerStorage {
    function upgradeabilityOwner() external view returns (address);
}
