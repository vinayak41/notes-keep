import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";
import { lightTheme } from "./theme/theme";

const theme = responsiveFontSizes(lightTheme());

console.log(theme)

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
