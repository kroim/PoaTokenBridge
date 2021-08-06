import { BigNumber } from 'ethers';
import { ETH_XDAI_BRIDGE } from 'lib/networks';

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000';
export const ETHER_CURRENCY_LOGO =
  'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880';

export const LARGEST_UINT256 = BigNumber.from(
  '115792089237316195423570985008687907853269984665640564039457584007913129639935',
);

export const POLLING_INTERVAL =
  process.env.REACT_APP_UI_STATUS_UPDATE_INTERVAL || 5000;

export const DEFAULT_BRIDGE_DIRECTION =
  process.env.REACT_APP_DEFAULT_BRIDGE_DIRECTION || ETH_XDAI_BRIDGE;

export const NON_ETH_CHAIN_IDS = [100];

export const XDAI_CHAIN_IDS = [100];

export const nativeCurrencies = {
  // 421: {
  //   chainId: 421,
  //   decimals: 18,
  //   logoURI: ETHER_CURRENCY_LOGO,
  //   address: ADDRESS_ZERO,
  //   name: 'Sustain Native Coin',
  //   symbol: 'ETH',
  //   mode: 'NATIVE',
  //   homeTokenAddress:
  //     '0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1'.toLowerCase(), // WETH in dai 
  // },  
};

export const nativeCurrencyMediators = {
  // 421: '0x227a6f13aa0dba8912d740c0f88fb1304b2597e1'.toLowerCase(), // WETHOmnibridgeRouter  
};

export const networkNames = {
  421: 'Sustain',
  100: 'xDai Chain',
};

export const networkLabels = {
  421: 'Sustain',  
  100: 'xDai',
};

export const networkCurrencies = {
  421: {
    name: 'Sustain',
    symbol: 'ETH',
  },
  100: {
    name: 'xDai',
    symbol: 'xDai',
  },
};

const {
  REACT_APP_MAINNET_RPC_URL,
  REACT_APP_XDAI_RPC_URL,  
} = process.env;

export const chainUrls = {
  421: {
    rpc: REACT_APP_MAINNET_RPC_URL.split(' '),
    explorer: 'https://blockscout.com/eth/mainnet',
    chainId: 421,
    name: networkNames[421],
  },
  100: {
    rpc: REACT_APP_XDAI_RPC_URL.split(' '),
    explorer: 'https://blockscout.com/xdai/mainnet',
    chainId: 100,
    name: networkNames[100],
  },
};

export const defaultTokensUrl = {
  100: 'https://tokens.honeyswap.org',
  421: 'https://tokens.uniswap.org',  
};

export const GRAPH_HEALTH_ENDPOINT =
  'https://api.thegraph.com/index-node/graphql';

export const LOCAL_STORAGE_KEYS = {
  DONT_SHOW_CLAIMS: 'dont-show-claims',
  MAINNET_RPC_URL: 'mainnet-rpc-url',
  XDAI_RPC_URL: 'xdai-rpc-url',
  NEVER_SHOW_CLAIMS: 'never-show-claims',
  INFINITE_UNLOCK: 'infinite-unlock',
  CUSTOM_TOKENS: 'customTokens',
  DISABLE_BALANCE_WHILE_TOKEN_FETCH: 'disable-balance-while-token-fetch',
  BRIDGE_DIRECTION: 'bridge-direction',
};
