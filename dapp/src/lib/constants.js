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

export const NON_ETH_CHAIN_IDS = [421];

export const PORINI_CHAIN_IDS = [421];

export const nativeCurrencies = {
  137: {
    chainId: 137,
    decimals: 18,
    logoURI: ETHER_CURRENCY_LOGO,
    address: ADDRESS_ZERO,
    name: 'MATIC',
    symbol: 'MATIC',
    mode: 'NATIVE',
    homeTokenAddress:
      '0x2d7ac2727432b1136f4984791cd9351913f15b35'.toLowerCase(),  // WMATIC address in porini network
  },
};

export const nativeCurrencyMediators = {
  137: '0xCF83d72daD5074deF57Db0aAca5200011667bBd4'.toLowerCase(),  // WETHBridgeRouter
};

export const networkNames = {
  137: 'Polygon',
  421: 'Porini',  
};

export const networkLabels = {
  137: 'Polygon',
  421: 'Porini',  
};

export const networkCurrencies = {
  137: {
    name: 'Polygon',
    symbol: 'MATIC',
  },
  421: {
    name: 'Porini',
    symbol: 'CETH',
  },  
};

const {
  REACT_APP_PORINI_RPC_URL,
  REACT_APP_POLYGON_RPC_URL,  
} = process.env;

export const chainUrls = {
  137: {
    rpc: REACT_APP_POLYGON_RPC_URL,
    explorer: 'https://polygonscan.com',
    chainId: 137,
    name: networkNames[137],
  },
  421: {
    rpc: REACT_APP_PORINI_RPC_URL,
    explorer: 'https://porini.xyz',
    chainId: 421,
    name: networkNames[421],
  },  
};

export const defaultTokensUrl = {
  137: '',
  421: '',  
};

export const GRAPH_HEALTH_ENDPOINT =
  'https://api.thegraph.com/index-node/graphql';

export const LOCAL_STORAGE_KEYS = {
  DONT_SHOW_CLAIMS: 'dont-show-claims',
  POLYGON_RPC_URL: 'polygon-rpc-url',
  PORINI_RPC_URL: 'porini-rpc-url',
  NEVER_SHOW_CLAIMS: 'never-show-claims',
  INFINITE_UNLOCK: 'infinite-unlock',
  CUSTOM_TOKENS: 'customTokens',
  DISABLE_BALANCE_WHILE_TOKEN_FETCH: 'disable-balance-while-token-fetch',
  BRIDGE_DIRECTION: 'bridge-direction',
};
