import { BigNumber } from 'ethers';

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000';
export const ETHER_CURRENCY_LOGO =
  'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880';

export const LARGEST_UINT256 = BigNumber.from(
  '115792089237316195423570985008687907853269984665640564039457584007913129639935',
);

export const POLLING_INTERVAL =
  process.env.REACT_APP_UI_STATUS_UPDATE_INTERVAL || 5000;

export const DEFAULT_BRIDGE_DIRECTION = process.env.REACT_APP_DEFAULT_BRIDGE_DIRECTION;

export const NON_ETH_CHAIN_IDS = [100];

export const XDAI_CHAIN_IDS = [100];

export const nativeCurrencies = {
  888: {
    chainId: 888,
    decimals: 18,
    logoURI: ETHER_CURRENCY_LOGO,
    address: ADDRESS_ZERO,
    name: 'Payfoot Ether',
    symbol: 'CETH',
    mode: 'NATIVE',
    homeTokenAddress:
      '0x2bb6abcb8c4b1ce6c170d0c656f0d8bdb291d4ae'.toLowerCase(),  // WETH address in home network
  },
};

export const nativeCurrencyMediators = {
  888: '0x45e36c73c5183191164292A0e46FCbEbBdBf01E2'.toLowerCase(),  // WETHPayfootBridgeRouter
};

export const networkNames = {
  888: 'Payfoot',
  100: 'xDai',  
};

export const networkLabels = {
  888: 'Payfoot',
  100: 'xDai',  
};

export const networkCurrencies = {
  888: {
    name: 'Ethereum',
    symbol: 'ETH',
  },
  100: {
    name: 'xDai',
    symbol: 'xDai',
  },  
};

const {
  REACT_APP_XDAI_RPC_URL,
  REACT_APP_PAYFOOT_RPC_URL,  
} = process.env;

export const chainUrls = {
  888: {
    rpc: REACT_APP_PAYFOOT_RPC_URL,
    explorer: '',
    chainId: 888,
    name: networkNames[888],
  },
  100: {
    rpc: REACT_APP_XDAI_RPC_URL,
    explorer: 'https://blockscout.com/xdai/mainnet',
    chainId: 100,
    name: networkNames[100],
  },  
};

export const defaultTokensUrl = {
  888: '',
  100: '',  
};

export const GRAPH_HEALTH_ENDPOINT =
  'https://api.thegraph.com/index-node/graphql';

export const LOCAL_STORAGE_KEYS = {
  DONT_SHOW_CLAIMS: 'dont-show-claims',
  PAYFOOT_RPC_URL: 'payfoot-rpc-url',
  XDAI_RPC_URL: 'xdai-rpc-url',
  NEVER_SHOW_CLAIMS: 'never-show-claims',
  INFINITE_UNLOCK: 'infinite-unlock',
  CUSTOM_TOKENS: 'customTokens',
  DISABLE_BALANCE_WHILE_TOKEN_FETCH: 'disable-balance-while-token-fetch',
  BRIDGE_DIRECTION: 'bridge-direction',
};
