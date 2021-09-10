import { Typography } from "@material-ui/core";
import React from "react";

const Banner = () => {
  return (
    <div
      style={{
        height: "15rem",

        backgroundImage:
          "url(https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" style={{ fontWeight: "bold", color: "white" }}>
          Test Banner
        </Typography>
      </div>
    </div>
  );
};

export default Banner;
