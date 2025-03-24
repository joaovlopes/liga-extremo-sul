"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode";

// Cria um tema customizado com base no defaultSystem, sobrescrevendo a configuração
const customTheme = {
  ...defaultSystem,
  config: {
    initialColorMode: "light", // ou "dark"
    useSystemColorMode: false, // desabilita a utilização do modo do sistema
  },
};

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={customTheme}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
