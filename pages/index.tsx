import React, { useContext, useEffect } from 'react';
import { Container } from '@material-ui/core';
import type { NextPage } from 'next';

import clientPromise from '../lib/mongodb';
import Header from '../src/components/page/index/Header';
import AnimatedPage from '../src/components/layout/AnimatedPage';
import Presentation from '../src/components/page/index/Presentation';
import ViewportContainer from '../src/components/layout/ViewPortContainer';
import { Context as AppContext } from '../src/context/AppContext';

const Home: NextPage = () => {
  const { state, logIn } = useContext(AppContext);

  useEffect(() => {
    logIn();
    console.log('Index state =', state);
  }, []);

  return (
    <AnimatedPage>
      <main>
        <Container maxWidth='xl'>
          <Header />
          <div style={{ height: '20vh' }} />
          <ViewportContainer>
            <Presentation />
          </ViewportContainer>
          <ViewportContainer>
            <Presentation />
          </ViewportContainer>
        </Container>
      </main>
    </AnimatedPage>
  );
};

export default Home;
