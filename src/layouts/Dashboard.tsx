import { Box, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

interface DashboardProps {
  children: ReactNode
}

export default function Dashboard({ children }: DashboardProps) {
  return (
    <Flex flexDirection="column" h="100vh">
      <Header />
      <Flex
        w="100%"
        my="8"
        maxWidth={1480}
        mx="auto"
        px="6"
        alignItems="baseline"
        justifyContent="space-between"
      >
        <Sidebar />
        <Box w="1200px" minH="500px" bg="gray.800" rounded="16" p="6">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}
