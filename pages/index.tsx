import React, { useEffect, useState } from "react";
import { Container, Typography } from "@material-ui/core";
import type { NextPage } from "next";

import fetchApi from "../src/api/nextApi";
import Banner from "../src/components/layout/Banner";
import Presentation from "../src/components/section/Presentation";
import Planning from "../src/components/section/Planning";
import Pricing from "../src/components/section/Pricing";
import clientPromise from "../lib/mongodb";
import Header from "../src/components/Header";

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
    <div>
      <main>
        <Container maxWidth="xl">
          <Header />
        </Container>
      </main>
    </div>
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
