import {
  Center,
} from '@chakra-ui/react';
import { ElementType } from 'react';

import { ActiveLink } from '../ActiveLink';

interface NavlinkProps {
  icon: ElementType ;
  to: string;
  children: string;
}

export default function Navlink({ children, to, icon }: NavlinkProps) {
  return (
    <Center h="30" w="100%" justifyContent="left">
      <ActiveLink icon={icon} to={to}>{children}</ActiveLink>
    </Center>
  );
}
