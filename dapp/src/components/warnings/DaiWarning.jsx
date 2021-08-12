import { Alert, AlertIcon, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';

const ERC20DaiAddress = {
  888: '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa',
  100: '0xa844e8c64608dede1f22f519ad0e98e2629684df',  
};

export const isERC20DaiAddress = token => {
  if (!token) return false;

  const { chainId, address } = token;
  return address.toLowerCase() === ERC20DaiAddress[chainId].toLowerCase();
};

const XDaiBridgeLink = () => (
  <Link href="https://bridge.xdaichain.com/" color="blue.500" isExternal>
    xDai Ethereum Bridge
  </Link>
);

export const DaiWarning = ({ noShadow = false }) => (
  <Flex align="center" direction="column" w="100%" mb="4">
    <Alert
      status="warning"
      borderRadius={5}
      boxShadow={noShadow ? 'none' : '0px 1rem 2rem rgba(204, 218, 238, 0.8)'}
    >
      <AlertIcon minWidth="20px" />
      <Text fontSize="small">
        Bridging DAI token to xDai Chain DOES NOT mint native xDai token. If you
        want native xDai, use the <XDaiBridgeLink />.
      </Text>
    </Alert>
  </Flex>
);
