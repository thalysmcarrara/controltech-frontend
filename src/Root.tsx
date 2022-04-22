import { ChakraProvider } from '@chakra-ui/react';

import Routes from './Routes';
import { theme } from './styles/theme';

export default function Root() {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
}
