export const ETH_XDAI_BRIDGE = 'sustain-xdai';

const ETH_XDAI_BRIDGE_CONFIG = {
  label: 'sustain⥊xdai',
  homeChainId: 100,
  foreignChainId: 421,
  enableReversedBridge: false,
  enableForeignCurrencyBridge: false,
  foreignMediatorAddress:
    '0x41D486E9Aa33263b0586d798C3c6601fA9C5a557'.toLowerCase(),
  homeMediatorAddress:
    '0x62f26c0255a6d98DfA9Db398116d1BA1ae7CEfbb'.toLowerCase(),
  foreignAmbAddress: '0x3bD9B4dD65050884B12Ec0B7318f9AbEC52Ae5E2'.toLowerCase(),
  homeAmbAddress: '0xfC575F0E2d856793dD527d8Bc8E042622B02Df26'.toLowerCase(),
  foreignGraphName: 'raid-guild/mainnet-omnibridge',
  homeGraphName: 'raid-guild/xdai-omnibridge',
  ambLiveMonitorPrefix: 'https://alm-xdai.herokuapp.com',
  claimDisabled: false,
  tokensClaimDisabled: [],
};

const ENABLED_BRIDGES = process.env.REACT_APP_ENABLED_BRIDGES.split(' ').map(
  b => b.toLowerCase(),
);

const bridgeInfo = {
  [ETH_XDAI_BRIDGE]: ETH_XDAI_BRIDGE_CONFIG,  
};

const getNetworkConfig = bridges => {
  if (bridges && bridges.length > 0 && bridgeInfo) {
    return bridges.reduce((t, b) => ({ ...t, [b]: bridgeInfo[b] }), {});
  }
  return bridgeInfo;
};

export const networks = getNetworkConfig(ENABLED_BRIDGES);

export const defaultTokens = {
  [ETH_XDAI_BRIDGE]: {
    421: {
      address: '0x62DAE5fD87368F56aF3D576D4837523429DcE2b1',
      chainId: 421,
      symbol: 'PCT',
      name: 'PCT',
    },
    100: {
      address: '0x800C618cFC61820EbB15C8fd816DEB675CFf82fc',
      chainId: 100,
      symbol: 'STAKE',
      name: 'STAKE on xDai',
    },
  },  
};
