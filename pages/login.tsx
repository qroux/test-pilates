import React, { useEffect, useState } from "react";
import { Container, Typography } from "@material-ui/core";
import type { NextPage } from "next";

import nextApi from "../src/api/nextApi";
import Banner from "../src/components/layout/Banner";

// @ts-ignore
const Login: NextPage = ({ users }: { users: any[] }) => {
  const [error, setError] = useState(null);

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
          <Typography variant="h1">Connexion</Typography>

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

export async function getServerSideProps() {
  let result: any[] = [];

  try {
    const {
      data: { users },
    } = await nextApi.get("/api/users");
    result = users;
  } catch (err) {
    console.log(err);
  }

  return {
    props: { users: result },
  };
}
