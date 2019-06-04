import React from "react";
import { styled } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import teal from "@material-ui/core/colors/teal";

const heroTheme = theme => {
  return createMuiTheme({
    palette: {
      primary: teal,
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

const HeroPresenter = props => {
  const HeroWrapper = styled(Container)({
    minWidth: "100vw",
    height: "100vh",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    //  ===== Hero Background Img =====
    background: props.heroImg,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    "&:after": {
      content: " ' ' ",
      position: "absolute",
      zIndex: 1,
      top: 0,
      left: 0,
      bottom: 0,
      width: "calc(100%)",
      background: "#00000069"
    },

    "& h1": {
      fontWeight: "lighter",
      zIndex: 5
    },

    "& h2": {
      fontWeight: "lighter",
      zIndex: 5
    },

    "& button": {
      zIndex: 5,
      backgroundColor: "#01968869",
      flexBasis: "8%",
      height: "6rem"
    }
  });

  const HeroButtonContainer = styled(Container)({
    position: "relative",
    padding: 0,

    width: "auto",
    color: "white",
    marginTop: "3rem",
    zIndex: 10,

    "& button": {
      color: "white",
      fontSize: "2rem",
      margin: "6px",
      borderRadius: "5rem",
      padding: "12px 7.5rem",
      backgroundColor: "#673ab736"
    }
  });

  return (
    <ThemeProvider theme={heroTheme}>
      <HeroWrapper className={props.heroClassName}>
        <Typography variant="h1">{props.heroHeader}</Typography>

        <Typography variant="h2">{props.heroSubHeader}</Typography>

        <HeroButtonContainer className={props.heroButtons}>
          <button>{props.heroButtonOne}</button>
          <button>{props.heroButtonTwo}</button>
        </HeroButtonContainer>
      </HeroWrapper>
    </ThemeProvider>
  );
};

export default HeroPresenter;
