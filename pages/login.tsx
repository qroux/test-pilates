import React, { useEffect, useState } from "react";
import { Container, Typography } from "@material-ui/core";
import type { NextPage } from "next";

import fetchApi from "../src/api/fetchApi";
import Banner from "../src/components/layout/Banner";
import Presentation from "../src/components/section/Presentation";
import Planning from "../src/components/section/Planning";
import Pricing from "../src/components/section/Pricing";
import clientPromise from "../lib/mongodb";

// @ts-ignore
const Login: NextPage = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApi("/api/users")
      .then((response) => {
        setUsers(response.data.users);
        setError(null);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const renderUsers = () => {
    return users.map((user, id) => {
      return (
        <Typography variant="body1" key={id}>
          {/* @ts-ignore */}
          {user.name}
        </Typography>
      );
    });
  };

  return (
    <div>
      <Banner />

      <main>
        <Container maxWidth="lg">
          <Presentation />
          <Planning />
          <Pricing />
          {error ? (
            <Typography color="error">{JSON.stringify(error)}</Typography>
          ) : null}
          <Typography>{users ? "oui" : "non"}</Typography>
          {renderUsers()}
        </Container>
      </main>
    </div>
  );
};

export default Login;

// export async function getServerSideProps() {
//   let users;
//   try {
//     const client = await clientPromise;
//     isConnected = true;
//   } catch (e) {
//     console.log(e);
//     isConnected = false;
//   }

//   return {
//     props: { isConnected },
//   };
// }
