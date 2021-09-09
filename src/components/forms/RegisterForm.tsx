import React, { useState } from "react";
import { Button, FormControl, TextField, Typography } from "@material-ui/core";
import { Lottie } from "@crello/react-lottie";

import nextApi from "../../api/nextApi";
import animation from "../../../public/animations/validate.json";

const RegisterForm = () => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const registerUser = () => {
    nextApi
      .post("/api/users/create", { firstName, lastName, email })
      .then((response) => {
        setUser(response.data.user);
        setError(null);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  const onSubmitHandler = () => {
    if (firstName && lastName && email) {
      registerUser();
    }
  };

  return (
    <>
      <Typography variant="body1" color="error">
        {error ? JSON.stringify(error) : null}
      </Typography>

      {/* @ts-ignore */}
      {user?.acknowledged ? (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Lottie
            speed={0.7}
            config={{ animationData: animation, loop: true }}
            style={{ height: "10rem", width: "10rem" }}
          />
        </div>
      ) : (
        <FormControl>
          <TextField
            id="firstName"
            label="prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <TextField
            id="lastName"
            label="nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <TextField
            id="email"
            label="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            style={{ marginTop: "2rem" }}
            onClick={onSubmitHandler}
            disabled={!email || !firstName || !lastName}
          >
            Create user
          </Button>
        </FormControl>
      )}
    </>
  );
};

export default RegisterForm;
