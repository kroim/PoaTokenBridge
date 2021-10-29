export const POLYGON_PORINI_BRIDGE = 'polygon-porini';

const POLYGON_PORINI_BRIDGE_CONFIG = {
  label: 'polygon⥊porini',
  homeChainId: 421,
  foreignChainId: 137,
  enableReversedBridge: false,
  enableForeignCurrencyBridge: false,
  foreignMediatorAddress:
    '0xA4a3B9A668C32b5413ac22f6Bc9D2fdc185F8FFa'.toLowerCase(),
  homeMediatorAddress:
    '0x7c2EC8E95ADFFFb30E4ab2885B1C5eCbAA427836'.toLowerCase(),
  foreignAmbAddress: '0x17fFd514b0970e0EdCfEF3c4062a7438b596834b'.toLowerCase(),
  homeAmbAddress: '0x581C8E96BF14e78F84923ea17024a8CdCA2c9902'.toLowerCase(),
  foreignGraphName: 'kroim/polygon-porinibridge',
  homeGraphName: 'porini/porinibridge',
  ambLiveMonitorPrefix: 'https://alm-xdai.herokuapp.com',
  claimDisabled: false,
  tokensClaimDisabled: [],
};


const ENABLED_BRIDGES = process.env.REACT_APP_ENABLED_BRIDGES.split(' ').map(
  b => b.toLowerCase(),
);

const bridgeInfo = {
  [POLYGON_PORINI_BRIDGE]: POLYGON_PORINI_BRIDGE_CONFIG,  
};

const getNetworkConfig = bridges => {
  if (bridges && bridges.length > 0 && bridgeInfo) {
    return bridges.reduce((t, b) => ({ ...t, [b]: bridgeInfo[b] }), {});
  }
  return bridgeInfo;
};

export const networks = getNetworkConfig(ENABLED_BRIDGES);

export const defaultTokens = {
  [POLYGON_PORINI_BRIDGE]: {
    137: {
      address: '0x2f800db0fdb5223b3c3f354886d907a671414a7f',
      chainId: 137,
      symbol: 'BCT',
      name: 'Base Carbon Tonne',
    },
    421: {
      address: '0x86edf3207f4c51dfcbe3c9bcee88d218db7637c0',
      chainId: 421,
      symbol: 'BCT',
      name: 'BCT on Porini',
    },
  },  
};
