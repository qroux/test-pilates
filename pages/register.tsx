import React, { useEffect, useState } from "react";
import { Button, Container, Typography } from "@material-ui/core";
import type { NextPage } from "next";

import Banner from "../src/components/layout/Banner";
import RegisterForm from "../src/components/forms/RegisterForm";
import nextApi from "../src/api/nextApi";
import AnimatedPage from "../src/components/layout/AnimatedPage";

// @ts-ignore
const Register: NextPage = () => {
  return (
    <AnimatedPage>
      <main>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center">
            Register
          </Typography>

          <RegisterForm />
        </Container>
      </main>
    </AnimatedPage>
  );
};

export default Register;
