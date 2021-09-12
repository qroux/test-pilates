import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";

export const paletteColorsNeutral = {
  dark: "#474747",
  light: "#F8F3F2",
};

export const paletteColorsDark = {
  primary: "#003952",
  secondary: "#18a18a",
  // secondary: "#01638D",
  error: "#FB9F89",
  background: "#1b262c",
  textPrimary: "#F8F3F2",
  textSecondary: "#18a18a",
  // paper: "#f5f5f5",
};

export const paletteColorsLight = {
  primary: "#3f51b5",
  secondary: "#f50057",
  error: "#f44336",
  background: "#fafafa",
  textPrimary: "rgba(0, 0, 0, 0.87)",
  textSecondary: "rgba(0, 0, 0, 0.54)",
};

export const darkTheme = (dark: boolean): ThemeOptions => {
  const paletteColors = dark ? paletteColorsDark : paletteColorsLight;

  return createMuiTheme({
    palette: {
      type: dark ? "dark" : "light",

      primary: {
        main: paletteColors.primary,
      },
      secondary: {
        main: paletteColors.secondary,
      },
      error: {
        main: paletteColors.error,
      },
      background: {
        default: paletteColors.background,
        // paper: paletteColors.paper,
      },
      text: {
        primary: paletteColors.textPrimary,
        secondary: paletteColors.textSecondary,
        // @ts-ignore
        dark: paletteColorsNeutral.dark,
        light: paletteColorsNeutral.light,
      },
    },
    typography: {
      fontFamily: ["Roboto"].join(","),
      h2: {
        fontFamily: "Dancing Script",
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            transition: "all 0.3s linear",
          },
        },
      },
    },
  });
};
