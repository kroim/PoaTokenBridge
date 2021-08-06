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
  421: {
    chainId: 421,
    decimals: 18,
    logoURI: ETHER_CURRENCY_LOGO,
    address: ADDRESS_ZERO,
    name: 'sustain Ether',
    symbol: 'CETH',
    mode: 'NATIVE',
    homeTokenAddress:
      '0x2bb6abcb8c4b1ce6c170d0c656f0d8bdb291d4ae'.toLowerCase(),  // WETH address in home network
  },
};

export const nativeCurrencyMediators = {
  421: '0x73fbDF615651B49Cb58B07aCEc2390Bc7E74b5A1'.toLowerCase(),  // WETHPoriniBridgeRouter
};

export const networkNames = {
  421: 'Sustain',
  100: 'xDai',  
};

export const networkLabels = {
  421: 'Sustain',
  100: 'xDai',  
};

export const networkCurrencies = {
  421: {
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
  REACT_APP_SUSTAIN_RPC_URL,  
} = process.env;

export const chainUrls = {
  421: {
    rpc: REACT_APP_SUSTAIN_RPC_URL,
    explorer: '',
    chainId: 421,
    name: networkNames[421],
  },
  100: {
    rpc: REACT_APP_XDAI_RPC_URL,
    explorer: 'https://blockscout.com/xdai/mainnet',
    chainId: 100,
    name: networkNames[100],
  },  
};

export const defaultTokensUrl = {
  421: '',
  100: '',  
};

export const GRAPH_HEALTH_ENDPOINT =
  'https://api.thegraph.com/index-node/graphql';

export const LOCAL_STORAGE_KEYS = {
  DONT_SHOW_CLAIMS: 'dont-show-claims',
  MAINNET_RPC_URL: 'mainnet-rpc-url',
  SUSTAIN_RPC_URL: 'sustain-rpc-url',
  XDAI_RPC_URL: 'xdai-rpc-url',
  NEVER_SHOW_CLAIMS: 'never-show-claims',
  INFINITE_UNLOCK: 'infinite-unlock',
  CUSTOM_TOKENS: 'customTokens',
  DISABLE_BALANCE_WHILE_TOKEN_FETCH: 'disable-balance-while-token-fetch',
  BRIDGE_DIRECTION: 'bridge-direction',
};
