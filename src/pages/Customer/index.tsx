import {
  Button, Flex, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr,
} from '@chakra-ui/react';
import {
  AiOutlinePlusCircle,
} from 'react-icons/ai';

import Dashboard from '../../layouts/Dashboard';
import SearchBar from '../Report/SearchBar';

export default function Customer() {
  return (
    <Dashboard>
      <Flex>
        <SearchBar />
        <Button leftIcon={<AiOutlinePlusCircle fontSize="20" />} colorScheme="facebook" ml="auto">
          Adicionar cliente
        </Button>
      </Flex>
      <Heading textAlign="center" as="h3" size="md" color="gray.200" mt="14" mb="4">Listagem de relatórios</Heading>
      <TableContainer>
        <Table size="lg">
          <Thead>
            <Tr>
              <Th>Nome fantasia</Th>
              <Th>CNPJ</Th>
              <Th>Email</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>wrc soluções</Td>
              <Td>01.473.461/0001-44</Td>
              <Td>wrcsolucoes@mail.com</Td>
            </Tr>
            <Tr>
              <Td>wrc soluções</Td>
              <Td>01.473.461/0001-44</Td>
              <Td>wrcsolucoes@mail.com</Td>
            </Tr>
            <Tr>
              <Td>wrc soluções</Td>
              <Td>01.473.461/0001-44</Td>
              <Td>wrcsolucoes@mail.com</Td>
            </Tr>
            <Tr>
              <Td>wrc soluções</Td>
              <Td>01.473.461/0001-44</Td>
              <Td>wrcsolucoes@mail.com</Td>
            </Tr>
            <Tr>
              <Td>wrc soluções</Td>
              <Td>01.473.461/0001-44</Td>
              <Td>wrcsolucoes@mail.com</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Dashboard>
  );
}
