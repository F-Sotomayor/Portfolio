import { extendTheme } from "@chakra-ui/react";
import { theme } from "@chakra-ui/react";

export default extendTheme({
  initialColorMode: "dark",
  colors: {
    primary: theme.colors.black,
    secondary: theme.colors.whiteAlpha,
  },
  styles: {
    global: {
      html: {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      body: {
        maxWidth: "1300px",
        padding: "8px",
        margin: "auto",
        padding: "16px",
      },
    },
  },
});
