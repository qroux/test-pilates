import { createTheme, ThemeOptions } from "@material-ui/core/styles";

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
  primary: "#6886c5",
  secondary: "#18a18a",
  // secondary: "#ffbf99",
  error: "#E44C65",
  background: "#f2f2f2",
  textPrimary: "#474747",
  textSecondary: "#18a18a",
  // paper: "#e6e6e6",
};

export const darkTheme = (dark: boolean): ThemeOptions => {
  const paletteColors = dark ? paletteColorsDark : paletteColorsLight;

  return createTheme({
    typography: {
      fontFamily: ["Roboto", "Montserrat"].join(","),
    },
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
    // overrides: {
    //   MuiCssBaseline: {
    //     "@global": {
    //       body: {
    //         transition: "all 0.3s linear",
    //       },
    //       strong: {
    //         color: paletteColors.secondary,
    //       },
    //     },
    //   },
    // },
  });
};
