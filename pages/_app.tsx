import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AppInsightsContext } from "@microsoft/applicationinsights-react-js";
import { reactPlugin } from "../AppInsights";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppInsightsContext.Provider value={reactPlugin}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AppInsightsContext.Provider>
  );
}

export default MyApp;
