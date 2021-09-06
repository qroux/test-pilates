import { ReactNode, useContext, useEffect } from "react";
// import Navbar from "./Navbar";
// import { Context as AppContext } from "../../globalState/context/AppContext";
import { darkTheme } from "../../../styles/theme/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
// import Cookies from "js-cookie";
// import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  const {
    state: { darkMode },
    switchTheme,
  } = useContext(AppContext);
  const theme = darkTheme(darkMode);

  useEffect(() => {
    const fetchCookie = () => {
      const cookie = Cookies.get("DARK_MODE");
      return !cookie || cookie === "false" ? false : true;
    };

    if (fetchCookie()) switchTheme(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          minHeight: "80vh",
          boxSizing: "border-box",
        }}
      >
        <Navbar />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
