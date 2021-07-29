pragma solidity 0.4.26;

interface IComptroller {
    function claimComp(address[] holders, address[] cTokens, bool borrowers, bool suppliers) external;
}
