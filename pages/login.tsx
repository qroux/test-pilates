import React, { useEffect, useState } from "react";
import { Container, Typography } from "@material-ui/core";
import type { NextPage } from "next";

import nextApi from "../src/api/nextApi";
import Banner from "../src/components/layout/Banner";

// @ts-ignore
const Login: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" align="center">
        Connexion
      </Typography>
    </Container>
  );
};

export default Login;

// export async function getServerSideProps() {
//   let result: any[] = [];

//   try {
//     const {
//       data: { users },
//     } = await nextApi.get("/api/users");
//     result = users;
//   } catch (err) {
//     console.log(err);
//   }

//   return {
//     props: { users: result },
//   };
// }
