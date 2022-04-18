import {
  ChakraProvider,
} from '@chakra-ui/react';
import * as React from 'react';

import { theme } from './styles/theme';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <h1>Hello world</h1>
    </ChakraProvider>
  );
}
