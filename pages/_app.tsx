import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import Layout from '../src/components/layout/Layout';

import { Provider as AppProvider } from '../src/context/AppContext';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AppProvider>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component
            {...pageProps}
            location={router.pathname}
            key={router.pathname}
          />
        </AnimatePresence>
      </Layout>
    </AppProvider>
  );
}
export default MyApp;
