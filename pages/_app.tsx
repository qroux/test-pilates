import type { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Layout from "../src/components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component
          {...pageProps}
          location={router.pathname}
          key={router.pathname}
        />
      </AnimatePresence>
    </Layout>
  );
}
export default MyApp;
