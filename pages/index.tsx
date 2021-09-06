import React, { useEffect, useState } from "react";
import { Container, Typography } from "@material-ui/core";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../src/components/page/Banner";

const Home: NextPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const root = process.env.PROD
      ? "https://test-pilates.herokuapp.com/"
      : "http://localhost:3000/";

    fetch(root + "/api/users")
      .then((res) => res.json())
      .then(({ users }) => {
        setUsers(users);
      });
  });

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
        <Typography variant="h5">Liste des participants</Typography>
        {renderUsers()}
      </Container>
    </div>
  );
};

export default Home;
