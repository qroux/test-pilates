import React, { useEffect, useState } from "react";
import { Button, Container, Typography } from "@material-ui/core";
import type { NextPage } from "next";

import Banner from "../src/components/layout/Banner";
import RegisterForm from "../src/components/forms/RegisterForm";
import nextApi from "../src/api/nextApi";

// @ts-ignore
const Register: NextPage = () => {
  return (
    <div>
      <Banner />

      <main>
        <Container maxWidth="lg">
          <Typography variant="h1">Register</Typography>
          <RegisterForm />
        </Container>
      </main>
    </div>
  );
};

export default Register;
