import {
  Button, Flex, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Text,
} from '@chakra-ui/react';
import {
  AiOutlinePlusCircle, AiOutlineDownload, AiOutlineEdit, AiOutlineDelete,
} from 'react-icons/ai';

import Dashboard from '../../layouts/Dashboard';
import SearchBar from './SearchBar';

export default function Report() {
  return (
    <Dashboard>
      <Flex justifyContent="center">
        <SearchBar />
        <Button leftIcon={<AiOutlinePlusCircle fontSize="20" />} colorScheme="facebook" ml="auto">
          Criar
        </Button>
      </Flex>
      <Heading textAlign="center" as="h3" size="md" color="gray.200" my="8">Listagem de relatórios</Heading>
      <TableContainer>
        <Table size="lg" variant="simple">
          <Thead>
            <Tr>
              <Th>Cliente</Th>
              <Th>Obra</Th>
              <Th>Emissor</Th>
              <Th />
              <Th />
              <Th />
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>wrc soluções</Td>
              <Td>MT 160</Td>
              <Td>Louistelson Moreira da Silva</Td>
              <Td>
                <Button leftIcon={<AiOutlineDownload fontSize="20" />} colorScheme="facebook" ml="auto">
                  Baixar
                </Button>
              </Td>
              <Td>
                <Button leftIcon={<AiOutlineEdit fontSize="20" />} colorScheme="facebook" ml="auto">
                  Editar
                </Button>
              </Td>
              <Td>
                <Button leftIcon={<AiOutlineDelete fontSize="20" />} colorScheme="facebook" ml="auto">
                  Deletar
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>vanguard construtora</Td>
              <Td>MT 160</Td>
              <Td>Louis Mateus</Td>
              <Td>
                <Button leftIcon={<AiOutlineDownload fontSize="20" />} colorScheme="facebook" ml="auto">
                  Baixar
                </Button>
              </Td>
              <Td>
                <Button leftIcon={<AiOutlineEdit fontSize="20" />} colorScheme="facebook" ml="auto">
                  Editar
                </Button>
              </Td>
              <Td>
                <Button leftIcon={<AiOutlineDelete fontSize="20" />} colorScheme="facebook" ml="auto">
                  Deletar
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>wrc soluções</Td>
              <Td>MT 160</Td>
              <Td>Louistelson Moreira da Silva</Td>
              <Td>
                <Button leftIcon={<AiOutlineDownload fontSize="20" />} colorScheme="facebook" ml="auto">
                  Baixar
                </Button>
              </Td>
              <Td>
                <Button leftIcon={<AiOutlineEdit fontSize="20" />} colorScheme="facebook" ml="auto">
                  Editar
                </Button>
              </Td>
              <Td>
                <Button leftIcon={<AiOutlineDelete fontSize="20" />} colorScheme="facebook" ml="auto">
                  Deletar
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>wrc soluções</Td>
              <Td>MT 160</Td>
              <Td>Louistelson Moreira da Silva</Td>
              <Td>
                <Button leftIcon={<AiOutlineDownload fontSize="20" />} colorScheme="facebook" ml="auto">
                  Baixar
                </Button>
              </Td>
              <Td>
                <Button leftIcon={<AiOutlineEdit fontSize="20" />} colorScheme="facebook" ml="auto">
                  Editar
                </Button>
              </Td>
              <Td>
                <Button leftIcon={<AiOutlineDelete fontSize="20" />} colorScheme="facebook" ml="auto">
                  Deletar
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>wrc soluções</Td>
              <Td>MT 160</Td>
              <Td>Louistelson Moreira da Silva</Td>
              <Td>
                <Button leftIcon={<AiOutlineDownload fontSize="20" />} colorScheme="facebook" ml="auto">
                  Baixar
                </Button>
              </Td>
              <Td>
                <Button leftIcon={<AiOutlineEdit fontSize="20" />} colorScheme="facebook" ml="auto">
                  Editar
                </Button>
              </Td>
              <Td>
                <Button leftIcon={<AiOutlineDelete fontSize="20" />} colorScheme="facebook" ml="auto">
                  Deletar
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Dashboard>
  );
}
