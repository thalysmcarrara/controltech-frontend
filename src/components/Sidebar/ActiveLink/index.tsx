import { Flex, Icon, Text } from '@chakra-ui/react';
import { ElementType } from 'react';
import {
  Link, LinkProps, useMatch, useResolvedPath,
} from 'react-router-dom';

interface ActiveLinkProps extends LinkProps {
  icon: ElementType
  children: string;
  to: string;
}

export function ActiveLink({
  children, to, icon, ...rest
}: ActiveLinkProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      style={{ textDecoration: match ? 'underline' : 'none', color: match ? '#004272' : '#B3B5C6' }}
      {...rest}
    >
      <Flex>
        <Icon as={icon} mr="4" fontSize="20" />
        <Text fontWeight="medium">{children}</Text>
      </Flex>
    </Link>
  );
}
