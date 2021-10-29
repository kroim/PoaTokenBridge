import {
  Button,
  Flex,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import InfoImage from 'assets/info.svg';
import React, { useState } from 'react';

const SHOW_TERMS = 'show-terms';

export const TermsOfServiceModal = () => {
  const fromStorage = window.localStorage.getItem(SHOW_TERMS);

  const [isOpen, setOpen] = useState(fromStorage !== 'false');
  const onClose = () => {
    window.localStorage.setItem(SHOW_TERMS, 'false');
    setOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      closeOnEsc={false}
      closeOnOverlayClick={false}
    >
      <ModalOverlay background="modalBG">
        <ModalContent
          boxShadow="0px 1rem 2rem #617492"
          borderRadius="1rem"
          maxW="33.75rem"
          mx={{ base: 12, lg: 0 }}
        >
          <ModalHeader
            p={6}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Image src={InfoImage} mb={4} w="4rem" />
            <Text>Welcome to the Polygon-Porini Bridge UI</Text>
          </ModalHeader>
          <ModalBody px={8} py={0}>
            <Flex align="center" direction="column" fontSize="sm">
              <Text as="p" textAlign="center" mb="4">
                We’re launching our Polygon-Porini Bridge and our UI App on a beta-testing
                basis. While we’ve worked long and hard to develop the core
                features of the software, we expect that our users may detect
                bugs and other issues.
              </Text>
              <Text as="p" textAlign="center" mb="4">
                {
                  'Use of this app and the Polygon-Porini Bridge is at your own risk. Users may experience unexpected delays, unexpected visual artifacts, unexpected loss of tokens or funds from improper app configuration, or other negative outcomes. '
                }
              </Text>              
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Flex justify="center" align="center" w="100%">
              <Button onClick={onClose} colorScheme="blue">
                Continue
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
