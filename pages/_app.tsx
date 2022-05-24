import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { AppInsightsContext } from "@microsoft/applicationinsights-react-js";
import { appWithTranslation } from "next-i18next";
import { SessionProvider } from "next-auth/react";

import { reactPlugin } from "../AppInsights";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <AppInsightsContext.Provider value={reactPlugin}>
      <ChakraProvider>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ChakraProvider>
    </AppInsightsContext.Provider>
  );
}

export default appWithTranslation(MyApp);
