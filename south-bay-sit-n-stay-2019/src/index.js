import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import { render } from 'react-dom'
import { createStore } from 'redux'
import store from './store'

require("./assets/style/root.scss");
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import teal from "@material-ui/core/colors/teal";
import grey from "@material-ui/core/colors/grey";
import deepPurple from "@material-ui/core/colors/deepPurple";

const h1FontColor = grey["100"];

//GLOBAL APPTHEME
const appTheme = createMuiTheme({
  palette: {
    primary: deepPurple
  },

  typography: {
    fontFamily: "Roboto",
    color: h1FontColor,
    fontSize: 20,

    h1: {
      fontWeight: "lighter",
      fontSize: "3rem",
      zIndex: 500,
      marginBottom: "0.33em"
    },

    h2: {
      fontSize: "1.5rem"
    }
  }
});

ReactDOM.render(
  <ThemeProvider theme={appTheme}>
    <Root store={store}/>
  </ThemeProvider>,
  document.getElementById("root")
);
