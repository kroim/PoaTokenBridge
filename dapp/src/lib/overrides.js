import {
  ETH_XDAI_BRIDGE,  
} from 'lib/networks';

const STAKETokenOverride = {
  100: {
    mediator: '0xf6A78083ca3e2a662D6dd1703c939c8aCE2e268d',
    from: '0xb7D311E2Eb55F2f68a9440da38e7989210b9A05e',
    to: '0x0Ae055097C6d159879521C384F1D2123D1f195e6',
    mode: 'erc677',
  },
  1: {
    mediator: '0x88ad09518695c6c3712AC10a214bE5109a655671',
    from: '0x0Ae055097C6d159879521C384F1D2123D1f195e6',
    to: '0xb7D311E2Eb55F2f68a9440da38e7989210b9A05e',
    mode: 'erc677',
  },
};

const ETH_XDAI_OVERRIDES = {  
  ['0x0Ae055097C6d159879521C384F1D2123D1f195e6'.toLowerCase()]: STAKETokenOverride,
  ['0xb7D311E2Eb55F2f68a9440da38e7989210b9A05e'.toLowerCase()]: STAKETokenOverride,  
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
