import { Alert, AlertIcon, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';

const ETH_REBASING_TOKENS = [
  '0xd46ba6d942050d489dbd938a2c909a5d5039a161'.toLowerCase(),
];


export const isRebasingToken = token => {
  if (!token) return false;
  const { chainId, address } = token;
  switch (chainId) {
    case 421:
      return ETH_REBASING_TOKENS.includes(address.toLowerCase());
    case 100:
    default:
      return false;
  }
};

const ExceptionsLink = ({ msg }) => (
  <Link
    href="https://www.xdaichain.com/for-users/bridges/omnibridge/exceptions#rebasing-tokens"
    color="blue.500"
    isExternal
  >
    {msg}
  </Link>
);

export const RebasingTokenWarning = ({ token, noShadow = false }) => (
  <Flex align="center" direction="column" w="100%" mb="4">
    <Alert
      status="error"
      borderRadius={5}
      boxShadow={noShadow ? 'none' : '0px 1rem 2rem rgba(204, 218, 238, 0.8)'}
    >
      <AlertIcon minWidth="20px" />
      <Text fontSize="small">
        {token.symbol} is a rebasing token and cannot be bridged.{' '}
        <ExceptionsLink msg="Learn more" />.
      </Text>
    </Alert>
  </Flex>
);
