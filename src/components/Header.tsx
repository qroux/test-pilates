import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      justifyContent: "space-around",
      alignItems: "center",
    },
  },
  textContainer: {
    [theme.breakpoints.up("md")]: {
      flex: 1,
    },
    [theme.breakpoints.down("sm")]: {
      flex: 0.9,
    },
  },
  imageContainer: {
    [theme.breakpoints.up("md")]: {
      flex: 1,
      height: "50rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "30rem",
      marginBottom: "2rem",
    },
  },
  image: {
    [theme.breakpoints.up("md")]: {
      top: "3rem",
      left: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      top: "1rem",
      left: "1rem",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div
      className={classes.headerContainer}
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        borderColor: "primary.main",
      }}
    >
      <div
        className={classes.textContainer}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontWeight: "bold",
        }}
      >
        <Typography variant="h1" style={{ fontWeight: "bold" }}>
          Random Title
        </Typography>
        <Typography variant="h2" style={{ fontWeight: "bold" }}>
          Random SUB Title
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{ marginTop: "5rem", fontWeight: "bold" }}
        >
          Register Now
        </Button>
      </div>

      <div
        className={classes.imageContainer}
        style={{
          position: "relative",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            zIndex: -1,
            border: "10px solid black",
          }}
        />

        <div
          className={classes.image}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1486551937199-baf066858de7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3846&q=80)",
          }}
        />
      </div>
    </div>
  );
};

export default Header;
