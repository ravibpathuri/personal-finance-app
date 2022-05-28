import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AppInsightsContext } from "@microsoft/applicationinsights-react-js";
import { appWithTranslation } from "next-i18next";

import { reactPlugin } from "../AppInsights";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppInsightsContext.Provider value={reactPlugin}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </AppInsightsContext.Provider>
  );
}

export default appWithTranslation(MyApp);
