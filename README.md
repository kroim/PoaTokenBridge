# PoaTokenBridge
 Token Bridge to transfer ERC20/ERC677 tokens between Sustain and xDai network.

## Development Order

1. [Deploy Amb bridges to home & foreign chain](tokenbridge/contracts/README.md)

2. [Deploy Bridge Mediator to home & foreign chain](bridge-contracts/README.md)

3. [Deploy subgraph for home & foreign network](subgraph/README.md)

4. [Launch oracle](tokenbridge/oracle/README.md)(use arbitrage message bridge)

5. [Integrate subgraph , bridges to Frontend](dapp/README.md)

6. [Deploy WETHOmnibridgeRouter contract to foreign chain](WETHOmnibridgeRouter.sol)
    Bridge : foreign bridge address
    Weth : WETH address in foreign network (native coin will be converted to this address when bridge to home network)
