import * as React from "react"
import {
  ChakraProvider,
} from "@chakra-ui/react"

import { theme } from './styles/theme'

export const App = () => (
  <ChakraProvider theme={theme} >
    <h1>Hello world</h1>
  </ChakraProvider>
)
