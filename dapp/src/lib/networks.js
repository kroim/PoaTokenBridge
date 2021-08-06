export const SUSTAIN_XDAI_BRIDGE = 'sustain-xdai';

const SUSTAIN_XDAI_BRIDGE_CONFIG = {
  label: 'sustain⥊xdai',
  homeChainId: 100,
  foreignChainId: 421,
  enableReversedBridge: false,
  enableForeignCurrencyBridge: false,
  foreignMediatorAddress:
    '0xA4509CF61CD9459A8a6CA209D2341bf8e35E0A8C'.toLowerCase(),
  homeMediatorAddress:
    '0xD44938ED64Df32c6Cc152F8dE8c4601DEe1C8A66'.toLowerCase(),
  foreignAmbAddress: '0x25b47dC0F6678d22492be6D00d3D67c987C0A405'.toLowerCase(),
  homeAmbAddress: '0xb7EE7a004cE119Bdb604443c102EC2e8Ccf5Ba59'.toLowerCase(),
  foreignGraphName: 'kroim/sustain-porinibridge',
  homeGraphName: 'kroim/xdai-porinibridge',
  ambLiveMonitorPrefix: 'https://alm-xdai.herokuapp.com',
  claimDisabled: false,
  tokensClaimDisabled: [],
};


const ENABLED_BRIDGES = process.env.REACT_APP_ENABLED_BRIDGES.split(' ').map(
  b => b.toLowerCase(),
);

const bridgeInfo = {
  [SUSTAIN_XDAI_BRIDGE]: SUSTAIN_XDAI_BRIDGE_CONFIG,  
};

const getNetworkConfig = bridges => {
  if (bridges && bridges.length > 0 && bridgeInfo) {
    return bridges.reduce((t, b) => ({ ...t, [b]: bridgeInfo[b] }), {});
  }
  return bridgeInfo;
};

export const networks = getNetworkConfig(ENABLED_BRIDGES);

export const defaultTokens = {
  [SUSTAIN_XDAI_BRIDGE]: {
    421: {
      address: '0x62DAE5fD87368F56aF3D576D4837523429DcE2b1',
      chainId: 421,
      symbol: 'PCT',
      name: 'PCT',
    },
    100: {
      address: '0x1e856ee72bd4037df8fa790abb399e59d669d171',
      chainId: 100,
      symbol: 'PCT',
      name: 'PCT on xDai',
    },
  },  
};
