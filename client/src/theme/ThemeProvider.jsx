import { MuiThemeProvider } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { DarkTheme, LightTheme } from "./theme";
import { responsiveFontSizes } from "@material-ui/core";

const ThemeProvider = (props) => {
  const lightTheme = responsiveFontSizes(LightTheme());
  const darkTheme = responsiveFontSizes(DarkTheme());
  const appTheme = useSelector((store) => store.theme.type);

  return (
    <MuiThemeProvider theme={appTheme === "dark" ? darkTheme : lightTheme}>
      {props.children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
