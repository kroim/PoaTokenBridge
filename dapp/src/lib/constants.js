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
  999: {
    chainId: 999,
    decimals: 18,
    logoURI: ETHER_CURRENCY_LOGO,
    address: ADDRESS_ZERO,
    name: 'SwissDLT Ether',
    symbol: 'CETH',
    mode: 'NATIVE',
    homeTokenAddress:
      '0x15bc9c3ff5252105895c33153f92f707d63c1487'.toLowerCase(),  // WETH address in home network
  },
};

export const nativeCurrencyMediators = {
  999: '0xbF9694F3601Bf337422aaf1329836DB7cDBD7B73'.toLowerCase(),  // WETHSwissDLTBridgeRouter
};

export const networkNames = {
  999: 'SwissDLT',
  100: 'xDai',  
};

export const networkLabels = {
  999: 'SwissDLT',
  100: 'xDai',  
};

export const networkCurrencies = {
  999: {
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
  REACT_APP_SWISSDLT_RPC_URL,  
} = process.env;

export const chainUrls = {
  999: {
    rpc: REACT_APP_SWISSDLT_RPC_URL,
    explorer: 'https://expedition.dev/?rpcUrl=https://rpc.operal.club',
    chainId: 999,
    name: networkNames[999],
  },
  100: {
    rpc: REACT_APP_XDAI_RPC_URL,
    explorer: 'https://blockscout.com/xdai/mainnet',
    chainId: 100,
    name: networkNames[100],
  },  
};

export const defaultTokensUrl = {
  999: '',
  100: '',  
};

export const GRAPH_HEALTH_ENDPOINT =
  'https://api.thegraph.com/index-node/graphql';

export const LOCAL_STORAGE_KEYS = {
  DONT_SHOW_CLAIMS: 'dont-show-claims',
  SWISSDLT_RPC_URL: 'swissdlt-rpc-url',
  XDAI_RPC_URL: 'xdai-rpc-url',
  NEVER_SHOW_CLAIMS: 'never-show-claims',
  INFINITE_UNLOCK: 'infinite-unlock',
  CUSTOM_TOKENS: 'customTokens',
  DISABLE_BALANCE_WHILE_TOKEN_FETCH: 'disable-balance-while-token-fetch',
  BRIDGE_DIRECTION: 'bridge-direction',
};
