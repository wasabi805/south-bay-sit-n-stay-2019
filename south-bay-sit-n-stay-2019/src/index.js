import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
require("./assets/style/root.scss");
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import teal from "@material-ui/core/colors/teal";
import grey from "@material-ui/core/colors/grey";
import deepPurple from "@material-ui/core/colors/deepPurple";

const h1FontColor = grey["100"];

const appTheme = createMuiTheme({
  palette: {
    primary: deepPurple
  },

  typography: {
    // fontFamily: 'BRUX',
    fontFamily: "Roboto",
    color: h1FontColor,

    h1: {
      fontWeight: "lighter",
      fontSize: "3rem",
      marginBottom: "5rem",
      zIndex: 500
    },

    h2: {
      fontSize: "1.5rem"
    }
  }
});

ReactDOM.render(
  <ThemeProvider theme={appTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
