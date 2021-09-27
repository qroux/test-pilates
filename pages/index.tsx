import React from 'react';
import { Container } from '@material-ui/core';
import type { NextPage } from 'next';

import clientPromise from '../lib/mongodb';
import Header from '../src/components/page/index/Header';
import AnimatedPage from '../src/components/layout/AnimatedPage';
import Presentation from '../src/components/page/index/Presentation';
import ViewportContainer from '../src/components/layout/ViewPortContainer';

// @ts-ignore
const Home: NextPage = ({ isConnected }: { isConnected: any }) => {
  // const [users, setUsers] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetchApi("/api/users")
  //     .then((response) => {
  //       setUsers(response.data.users);
  //       setError(null);
  //     })
  //     .catch((err) => {
  //       setError(err);
  //     });
  // }, []);

  // const renderUsers = () => {
  //   return users.map((user, id) => {
  //     return (
  //       <Typography variant="body1" key={id}>
  //         {/* @ts-ignore */}
  //         {user.name}
  //       </Typography>
  //     );
  //   });
  // };

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

export async function getServerSideProps() {
  let isConnected;
  try {
    const client = await clientPromise;
    isConnected = true;
  } catch (e) {
    console.log(e);
    isConnected = false;
  }

  return {
    props: { isConnected },
  };
}
