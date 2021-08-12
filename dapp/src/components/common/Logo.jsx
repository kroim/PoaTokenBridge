import { Image } from '@chakra-ui/react';
import EthLogo from 'assets/eth-logo.png';
import xDAILogo from 'assets/xdai-logo.png';
import { useWeb3Context } from 'contexts/Web3Context';
import { useBridgeDirection } from 'hooks/useBridgeDirection';
import { uriToHttp } from 'lib/helpers';
import React, { useState } from 'react';

const BAD_SRCS = {};

const logos = {
  888: EthLogo,
  100: xDAILogo,  
};

export const Logo = ({ uri, reverseFallback = false }) => {
  const { getBridgeChainId } = useBridgeDirection();
  const { providerChainId } = useWeb3Context();
  const chainId = reverseFallback
    ? getBridgeChainId(providerChainId)
    : providerChainId;
  const fallbackLogo = logos[chainId];
  const [, refresh] = useState(0);

  if (uri) {
    const srcs = uriToHttp(uri);
    const src = srcs.find(s => !BAD_SRCS[s]);

    if (src) {
      return (
        <Image
          src={src}
          onError={() => {
            if (src) BAD_SRCS[src] = true;
            refresh(i => i + 1);
          }}
        />
      );
    }
  }

  return <Image src={fallbackLogo} />;
};
