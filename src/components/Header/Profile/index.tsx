import {
  Avatar, Box, Flex, Text,
} from '@chakra-ui/react';

export default function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Louistelson Moreira da Silva</Text>
        <Text color="gray.300" fontSize="small">
          louistelson@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Louistelson Moreira" src="" />
    </Flex>
  );
}
