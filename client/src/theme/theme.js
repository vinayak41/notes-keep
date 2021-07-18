import { createTheme } from "@material-ui/core/styles";

export const lightTheme = () =>
  createTheme({
    typography: {
      fontFamily: ["Ubuntu", "sans-serif"],
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
    palette: {
      type: "light",
      primary: {
        light: "#ffffa8",
        dark: "#cabf45",
        main: "#fff176",
      },
      secondary: {
        light: "#e7ff8c",
        dark: "#e7ff8c",
        main: "#b2ff59",
      },
      error: {
        light: "#e57373",
        main: "#f44336",
        dark: "#d32f2f ",
      },
      grey: {
        50: "#fafafa",
        500: "#9e9e9e",
        800: "#424242",
      },
      text: {
        primary: "#000000",
        secondary: "#2d2d2d",
      },
    },
    spacing: 2,
  });