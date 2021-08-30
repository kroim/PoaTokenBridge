export const SWISSDLT_XDAI_BRIDGE = 'swissdlt-xdai';

const SWISSDLT_XDAI_BRIDGE_CONFIG = {
  label: 'swissdlt⥊xdai',
  homeChainId: 100,
  foreignChainId: 999,
  enableReversedBridge: false,
  enableForeignCurrencyBridge: false,
  foreignMediatorAddress:
    '0x369e50796F6717d8C7bcAb8052aa98BaEd19d410'.toLowerCase(),
  homeMediatorAddress:
    '0x746946cab95CF2146Bd61E55BbE3A16Bf058579A'.toLowerCase(),
  foreignAmbAddress: '0x94079Fc83fED7c5EAcF38BB47637afaf68E9D897'.toLowerCase(),
  homeAmbAddress: '0x34173525A967F27E9ca536890F2BDa4812170f5D'.toLowerCase(),
  foreignGraphName: 'kroim/swissdl-swissdlbridge',
  homeGraphName: 'kroim/xdai-swissdltbridge',
  ambLiveMonitorPrefix: 'https://alm-xdai.herokuapp.com',
  claimDisabled: false,
  tokensClaimDisabled: [],
};


const ENABLED_BRIDGES = process.env.REACT_APP_ENABLED_BRIDGES.split(' ').map(
  b => b.toLowerCase(),
);

const bridgeInfo = {
  [SWISSDLT_XDAI_BRIDGE]: SWISSDLT_XDAI_BRIDGE_CONFIG,  
};

const getNetworkConfig = bridges => {
  if (bridges && bridges.length > 0 && bridgeInfo) {
    return bridges.reduce((t, b) => ({ ...t, [b]: bridgeInfo[b] }), {});
  }
  return bridgeInfo;
};

export const networks = getNetworkConfig(ENABLED_BRIDGES);

export const defaultTokens = {
  [SWISSDLT_XDAI_BRIDGE]: {
    999: {
      address: '0xbF9694F3601Bf337422aaf1329836DB7cDBD7B73',
      chainId: 999,
      symbol: 'WETH',
      name: 'WETH',
    },
    100: {
      address: '0x15bc9c3ff5252105895c33153f92f707d63c1487',
      chainId: 100,
      symbol: 'WETH',
      name: 'WETH on xDai',
    },
  },  
};
