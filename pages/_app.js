import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../src/components/Layout";
import theme from '../src/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
