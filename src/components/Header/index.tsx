import { Box, Flex, Image } from '@chakra-ui/react';

import Profile from './Profile';

export default function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
      justifyContent="space-between"
    >
      <Box bg="white" w="fit-content" rounded="full">
        <Image className="logo" height="70px" src="/assets/controltechlogo.png" alt="logo controltech" />
      </Box>
      <Profile />
    </Flex>
  );
}
