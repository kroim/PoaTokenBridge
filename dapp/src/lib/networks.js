export const PAYFOOT_XDAI_BRIDGE = 'payfoot-xdai';

const PAYFOOT_XDAI_BRIDGE_CONFIG = {
  label: 'payfoot⥊xdai',
  homeChainId: 100,
  foreignChainId: 888,
  enableReversedBridge: false,
  enableForeignCurrencyBridge: false,
  foreignMediatorAddress:
    '0xEDc050B77d98aAdF1e35525C4826fD007C09142e'.toLowerCase(),
  homeMediatorAddress:
    '0x0065100E9AB5E853A2775532df05B34B0F8ba22e'.toLowerCase(),
  foreignAmbAddress: '0xC91FF429bc1F68ED4BDB1E4Cb68bF179dB036209'.toLowerCase(),
  homeAmbAddress: '0x36716c9252C706000B5f969B7Ecb7786019a64D6'.toLowerCase(),
  foreignGraphName: 'kroim/payfoot-payfootbridge',
  homeGraphName: 'kroim/xdai-payfootbridge',
  ambLiveMonitorPrefix: 'https://alm-xdai.herokuapp.com',
  claimDisabled: false,
  tokensClaimDisabled: [],
};


const ENABLED_BRIDGES = process.env.REACT_APP_ENABLED_BRIDGES.split(' ').map(
  b => b.toLowerCase(),
);

const bridgeInfo = {
  [PAYFOOT_XDAI_BRIDGE]: PAYFOOT_XDAI_BRIDGE_CONFIG,  
};

const getNetworkConfig = bridges => {
  if (bridges && bridges.length > 0 && bridgeInfo) {
    return bridges.reduce((t, b) => ({ ...t, [b]: bridgeInfo[b] }), {});
  }
  return bridgeInfo;
};

export const networks = getNetworkConfig(ENABLED_BRIDGES);

export const defaultTokens = {
  [PAYFOOT_XDAI_BRIDGE]: {
    888: {
      address: '0x1C90008B345fA5BEf50d6AB617A1BB91cf51c41d',
      chainId: 888,
      symbol: 'PFT',
      name: 'PFT',
    },
    100: {
      address: '0xbd1936443b6ce7129ea8d2d252b1eb8f5fc2290e',
      chainId: 100,
      symbol: 'PFT',
      name: 'PFT on xDai',
    },
  },  
};
