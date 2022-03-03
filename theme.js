import { extendTheme } from "@chakra-ui/react";
import { theme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export default extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    primary: theme.colors.black,
    secondary: theme.colors.whiteAlpha,
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      body: {},
    },
  },
  components: {
    Button: {
      baseStyle: {
        color: "white",
        bg: "blue.300",
        backgroundColor: "blue.300",
        _hover: {
          bg: "blue.300",
          backgroundColor: "blue.400",
        },
        _dark: {
          color: "black",
          backgroundColor: "gray.100",
          _hover: {
            bg: "blue.300",
            backgroundColor: "blue.300",
            color: "white",
          },
        },
      },
      variants: {
        sourceCode: {
          backgroundColor: "green.300",
          color: "white",
          _hover: {
            bg: "green.300",
            backgroundColor: "green.400",
          },
          _dark: {
            _hover: {
              bg: "green.200",
              backgroundColor: "green.200",
            },
          },
        },
      },
    },
  },
});
