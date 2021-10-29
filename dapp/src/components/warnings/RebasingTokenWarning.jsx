import { Alert, AlertIcon, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';

export const isRebasingToken = token => {
  if (!token) return false;
  const { chainId } = token;
  switch (chainId) {
    case 421:
    case 137:
    default:
      return false;
  }
};

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
      </Text>
    </Alert>
  </Flex>
);
