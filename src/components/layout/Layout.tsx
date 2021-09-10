import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { darkTheme } from "../../../styles/theme";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = darkTheme(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
