import { Stack, Text } from '@chakra-ui/react';
import { RiBarChartBoxLine, RiCustomerService2Line, RiUserLine } from 'react-icons/ri';

import Navlink from './Navlink';

export default function Sidebar() {
  return (
    <Stack spacing="8" w="200px" justifyContent="center">
      <Text fontWeight="bold" color="gray.400" fontSize="lg">Menu</Text>
      <Stack w="100%" justifyContent="left" spacing="4">
        <Navlink icon={RiBarChartBoxLine} to="/dashboard/report">Relatório</Navlink>
        <Navlink icon={RiCustomerService2Line} to="/dashboard/customer">Cliente</Navlink>
        <Navlink icon={RiUserLine} to="/dashboard/user">Usuários</Navlink>
      </Stack>
    </Stack>
  );
}
