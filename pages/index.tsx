import { Container } from "@material-ui/core";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Banner from "../src/components/page/Banner";

const Home: NextPage = () => {
  return (
    <div>
      <Banner />

      <Container maxWidth="lg" style={{ border: "1px solid red" }}>
        Test
      </Container>
    </div>
  );
};

export default Home;
