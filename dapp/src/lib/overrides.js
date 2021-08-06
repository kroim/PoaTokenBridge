import {
  ETH_XDAI_BRIDGE,  
} from 'lib/networks';

const STAKETokenOverride = {
  100: {
    mediator: '0x62f26c0255a6d98DfA9Db398116d1BA1ae7CEfbb',
    from: '0x800C618cFC61820EbB15C8fd816DEB675CFf82fc',
    to: '0x62DAE5fD87368F56aF3D576D4837523429DcE2b1',
    mode: 'erc677',
  },
  421: {
    mediator: '0x41D486E9Aa33263b0586d798C3c6601fA9C5a557',
    from: '0x62DAE5fD87368F56aF3D576D4837523429DcE2b1',
    to: '0x800C618cFC61820EbB15C8fd816DEB675CFf82fc',
    mode: 'erc677',
  },
};

const ETH_XDAI_OVERRIDES = {  
  
};


const OVERRIDES = {
  [ETH_XDAI_BRIDGE]: ETH_XDAI_OVERRIDES,  
};

export const isOverridden = (bridgeDirection, token) => {
  if (!token || !bridgeDirection) return false;
  const { address, chainId } = token;
  if (!address || !chainId) return false;
  const overrides = OVERRIDES[bridgeDirection];
  const override = overrides[address.toLowerCase()];
  return override !== undefined && override[chainId] !== undefined;
};

export const getOverriddenToToken = (bridgeDirection, token) => {
  if (!token || !bridgeDirection) return null;
  const { address, chainId } = token;
  if (!address || !chainId) return null;
  const overrides = OVERRIDES[bridgeDirection];
  return overrides[address.toLowerCase()][chainId].to;
};

export const getOverriddenMode = (bridgeDirection, token) => {
  if (!token || !bridgeDirection) return null;
  const { address, chainId } = token;
  if (!address || !chainId) return null;
  const overrides = OVERRIDES[bridgeDirection];
  return overrides[address.toLowerCase()][chainId].mode;
};

export const getOverriddenMediator = (bridgeDirection, token) => {
  if (!token || !bridgeDirection) return null;
  const { address, chainId } = token;
  if (!address || !chainId) return null;
  const overrides = OVERRIDES[bridgeDirection];
  return overrides[address.toLowerCase()][chainId].mediator.toLowerCase();
};
