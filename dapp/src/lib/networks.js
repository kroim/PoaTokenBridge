export const PAYFOOT_XDAI_BRIDGE = 'payfoot-xdai';

const PAYFOOT_XDAI_BRIDGE_CONFIG = {
  label: 'payfoot⥊xdai',
  homeChainId: 100,
  foreignChainId: 888,
  enableReversedBridge: false,
  enableForeignCurrencyBridge: false,
  foreignMediatorAddress:
    '0x5b9a74E320a56B8f303dca1DB71648fBD2832bE5'.toLowerCase(),
  homeMediatorAddress:
    '0xcBFbb8494986a2A21A0cd3103f8a829Fd9E245f7'.toLowerCase(),
  foreignAmbAddress: '0xa17eeB30078179CB5bcF43d0EbaBfc9a10c444Dd'.toLowerCase(),
  homeAmbAddress: '0xabE0d17681E720D4Dbdebe25F4c9847E1A93567C'.toLowerCase(),
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
      address: '0x96b4e33eeb4530113237b5ec1c1046da4531776d',
      chainId: 100,
      symbol: 'PFT',
      name: 'PFT on xDai',
    },
  },  
};
