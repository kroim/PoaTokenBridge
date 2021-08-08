# PoaTokenBridge
 Token Bridge to transfer ERC20/ERC677 tokens between Sustain and xDai network.

## Development Order

| [Deploy Amb bridges to home & foreign chain](tokenbridge/contract/README.md)

| [Deploy Bridge Mediator to home & foreign chain](bridge-contracts/README.md)

| [Deploy subgraph for home & foreign network](subgraph/README.md)

| [Launch oracle](tokenbridge/oracle/README.md)(use arbitrage message bridge)

| [Integrate subgraph , bridges to Frontend](dapp/README.md)

| [Deploy WETHOmnibridgeRouter contract to foreign chain](WETHOmnibridgeRouter.sol)
    Bridge : foreign bridge address
    Weth : WETH address in foreign network (native coin will be converted to this address when bridge to home network)
