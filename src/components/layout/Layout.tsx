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
      <div style={{ minHeight: "90vh", paddingBottom: "10rem" }}>
        <Navbar />
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
