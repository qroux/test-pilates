import React, { useEffect, useState } from "react";
import { Container, Typography } from "@material-ui/core";
import type { NextPage } from "next";

import fetchApi from "../src/api/fetchApi";
import Banner from "../src/components/page/Banner";

const Home: NextPage = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApi("/api/users")
      .then((response) => {
        setUsers(response.data.users);
        setError(null);
      })
      .catch((err) => setError(err.response.data));
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

      <Container maxWidth="lg" style={{ border: "1px solid red" }}>
        <Typography variant="h3">
          Nombre de participants : {users.length}
        </Typography>
        {error ? (
          <Typography variant="body1" color="error">
            error: {JSON.stringify(error)}
          </Typography>
        ) : null}

        <Typography variant="h5">Liste des participants</Typography>
        {renderUsers()}
      </Container>
    </div>
  );
};

export default Home;
