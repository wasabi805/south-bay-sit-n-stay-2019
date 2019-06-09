import React from "react";
import PropTypes from "prop-types";
import { styled } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import grey from "@material-ui/core/colors/grey";

const heroHeaderBTheme = theme => {
  return createMuiTheme({
    palette: {
      primary: grey,

      text: {
        primary: "#ffffff",
        secondary: "#00000"
      }
    },

    typography: {
      fontFamily: "Roboto",

      h1: {
        color: "white",
        fontSize: "3rem",
        marginBottom: "2rem"

        // [theme.breakpoints.up("md")]: {
        //         //   color: "red"
        //         // }
      },

      h2: {
        color: "white",
        fontSize: "1.5rem"
      }
    }
  });
};

const HeroHeaderB = props => {
  const HeaderWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    zIndex: 300,
    textAlign: "start"
  });

  const headers = styled(Typography)({
    flex: 1,
    margin: 0,
    fontSize: "8rem",
    fontWeight: "900"
  });

  const HeroHeaderBOne = headers;
  const HeroHeaderBTwo = headers;

  const HeroSubHeaderB = styled(Typography)({
    color: "white"
  });

  return (
    <ThemeProvider theme={heroHeaderBTheme}>
      <HeaderWrapper>
        <HeroHeaderBOne variant={"h1"}>{props.heroHeaderBOne}</HeroHeaderBOne>
        <HeroHeaderBTwo variant={"h1"}>{props.heroHeaderBTwo}</HeroHeaderBTwo>

        <HeroSubHeaderB variant={"h3"}>{props.heroSubHeaderB}</HeroSubHeaderB>
      </HeaderWrapper>
    </ThemeProvider>
  );
};

export default HeroHeaderB;

HeroHeaderB.protoTypes = {
  heroHeaderBOne: PropTypes.string,
  heroHeaderBTwo: PropTypes.string,
  heroSubHeaderB: PropTypes.string
};
