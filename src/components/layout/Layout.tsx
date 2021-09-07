import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { darkTheme } from "../../../styles/theme";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = darkTheme(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
