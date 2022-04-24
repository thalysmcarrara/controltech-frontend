import {
  Flex, FormControl, FormLabel, Icon, Input, Button, Box,
} from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

export default function SearchBarCustomer() {
  return (
    <Box>
      <Flex>
        <FormControl maxW="300px">
          <FormLabel
            htmlFor="search-report"
            display="flex"
            alignItems="center"
            bg="gray.900"
            border="1px"
            borderColor="gray.400"
            px="2"
            rounded="6"
          >
            <Icon as={RiSearchLine} fontSize="20" />
            <Input
              placeholder="Digite o cnpj do cliente"
              id="search-report"
              type="text"
              bg="gray.900"
              variant="filled"
              _hover={{
                bg:
              'gray.900',
              }}
              _focus={{ outline: 'none' }}
              autoComplete="off"
            />
          </FormLabel>
        </FormControl>
        <Button colorScheme="facebook">Buscar</Button>
      </Flex>
    </Box>
  );
}
