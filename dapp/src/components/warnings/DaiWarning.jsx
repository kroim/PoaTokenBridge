import { Alert, AlertIcon, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';

export const isERC20DaiAddress = token => {
  return false;
};

export const DaiWarning = ({ noShadow = false }) => (
  <Flex align="center" direction="column" w="100%" mb="4">
    <Alert
      status="warning"
      borderRadius={5}
      boxShadow={noShadow ? 'none' : '0px 1rem 2rem rgba(204, 218, 238, 0.8)'}
    >
      <AlertIcon minWidth="20px" />
      <Text fontSize="small">
        Bridging token to Porini Chain DOES NOT mint native Porini token.
      </Text>
    </Alert>
  </Flex>
);
