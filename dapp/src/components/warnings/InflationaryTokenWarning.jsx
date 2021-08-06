import { Alert, AlertIcon, Checkbox, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';

const ETH_INFLATIONARY_TOKENS = [
  '0xae7ab96520de3a18e5e111b5eaab095312d7fe84'.toLowerCase(),
];


export const isInflationaryToken = token => {
  if (!token) return false;
  const { chainId, address } = token;
  switch (chainId) {
    case 421:
      return ETH_INFLATIONARY_TOKENS.includes(address.toLowerCase());
    case 100:
    default:
      return false;
  }
};

const ExceptionsLink = ({ msg }) => (
  <Link
    href="https://www.xdaichain.com/for-users/bridges/omnibridge/exceptions"
    color="blue.500"
    isExternal
  >
    {msg}
  </Link>
);

export const InflationaryTokenWarning = ({
  token,
  isChecked,
  setChecked,
  noShadow = false,
  noCheckbox = false,
}) => (
  <Flex align="center" direction="column" w="100%" mb="4">
    <Alert
      status="warning"
      borderRadius={5}
      mb={noCheckbox ? '0' : '4'}
      boxShadow={noShadow ? 'none' : '0px 1rem 2rem rgba(204, 218, 238, 0.8)'}
    >
      <AlertIcon minWidth="20px" />
      <Text fontSize="small">
        {token.symbol} is an inflationary token. Any accumulated gains WILL NOT
        be added to your balance upon exit. Please see{' '}
        <ExceptionsLink msg="the documentation" /> before bridging.
      </Text>
    </Alert>
    {!noCheckbox && (
      <Checkbox
        w="100%"
        isChecked={isChecked}
        onChange={e => setChecked(e.target.checked)}
        borderColor="grey"
        borderRadius="4px"
        size="lg"
        variant="solid"
      >
        <Text fontSize="sm">
          I agree to proceed and understand I will not receive inflation.
        </Text>
      </Checkbox>
    )}
  </Flex>
);
