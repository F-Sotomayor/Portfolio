import { ChakraProvider, Container } from "@chakra-ui/react";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Container maxW="container.lg" margin="auto">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
