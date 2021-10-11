import { useSettings } from 'contexts/SettingsContext';
import { useAmbVersion } from 'hooks/useAmbVersion';
import { useRequiredSignatures } from 'hooks/useRequiredSignatures';
import { networks } from 'lib/networks';
import { useCallback, useMemo } from 'react';

export const useBridgeDirection = () => {
  const { bridgeDirection } = useSettings();
  const bridgeConfig = useMemo(
    () => networks[bridgeDirection] || Object.values(networks)[0],
    [bridgeDirection],
  );

  const {
    homeChainId,
    foreignChainId,
    ambLiveMonitorPrefix,
    homeAmbAddress,
    foreignAmbAddress,
  } = bridgeConfig;

  const foreignAmbVersion = useAmbVersion(foreignChainId, foreignAmbAddress);

  const homeRequiredSignatures = useRequiredSignatures(
    homeChainId,
    homeAmbAddress,
  );

  const getBridgeChainId = useCallback(
    chainId => (chainId === homeChainId ? foreignChainId : homeChainId),
    [homeChainId, foreignChainId],
  );

  const getMonitorUrl = useCallback(
    (chainId, hash) => `${ambLiveMonitorPrefix}/${chainId}/${hash}`,
    [ambLiveMonitorPrefix],
  );

  const getGraphEndpoint = useCallback(
    chainId => {
      if (homeChainId === chainId) {
        // return home network sugraph link
        return `https://api.thegraph.com/subgraphs/name/kroim/xdai-swissdltbridge`;
      } 
        // return foreign network subgraph link
        return `https://subgraph.swissdltbridge.com/subgraphs/name/swissdlt/swissdltbridge`;       
    },
    [homeChainId],
  );

  const getAMBAddress = useCallback(
    chainId => (chainId === homeChainId ? homeAmbAddress : foreignAmbAddress),
    [homeChainId, homeAmbAddress, foreignAmbAddress],
  );

  return {
    bridgeDirection,
    getBridgeChainId,
    getMonitorUrl,
    getGraphEndpoint,
    getAMBAddress,
    foreignAmbVersion,
    homeRequiredSignatures,
    ...bridgeConfig,
  };
};
