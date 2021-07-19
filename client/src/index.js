import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";
import { lightTheme } from "./theme/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import store from "./redux/store";
import { Provider } from "react-redux";

const theme = responsiveFontSizes(lightTheme());

console.log(theme);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
