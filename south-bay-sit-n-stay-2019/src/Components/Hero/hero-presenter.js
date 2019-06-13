import React, { Component } from "react";
import PropTypes from "prop-types";
import { styled } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";

import HeroHeaderB from "./hero-header-b";
import Box from "@material-ui/core/Box";
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

class HeroPresenter extends Component {
  constructor(props) {
    super(props);
    this.displayHeroButtons = this.displayHeroButtons.bind(this);
    this.displayHeroHeader = this.displayHeroHeader.bind(this);
  }

  displayHeroButtons() {
    let btn = this.props;

    if (btn.heroButtonOne === "" && btn.heroButtonTwo === "") {
      return;
    }

    if (btn.heroButtonOne && btn.heroButtonTwo === "") {
      return <button>{this.props.heroButtonOne}</button>;
    }

    if (btn.heroButtonOne && btn.heroButtonTwo) {
      return (
        <React.Fragment>
          <button>{this.props.heroButtonOne}</button>
          <button>{this.props.heroButtonTwo}</button>
        </React.Fragment>
      );
    }
  }

  displayHeroHeader() {
    let header = this.props;

    if (header.heroHeaderBOne) {
      return (
        <HeroHeaderB
          heroHeaderBOne={header.heroHeaderBOne}
          heroHeaderBTwo={header.heroHeaderBTwo}
          heroSubHeaderB={header.heroSubHeaderB}
        />
      );
    }
  }
  render() {
    const HeroWrapper = styled(Box)({
      minWidth: "100vw",
      height: "100vh",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
      padding: "2rem",
      //  ===== Hero Background Img =====
      background: this.props.heroImg,
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

    const HeroButtonBox = styled(Box)({
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
        <HeroWrapper className={this.props.heroClassName} button={""}>
          <Typography variant="h1">{this.props.heroHeader}</Typography>
          {this.displayHeroHeader()}
          <Typography variant="h2">{this.props.heroSubHeader}</Typography>

          <HeroButtonBox className={this.props.heroButtons}>
            {this.displayHeroButtons()}
          </HeroButtonBox>
        </HeroWrapper>
      </ThemeProvider>
    );
  }
}

export default HeroPresenter;

HeroPresenter.propTypes = {
  heroHeaderBOne: PropTypes.string,
  heroImg: PropTypes.string.isRequired,
  HeroWrapper: PropTypes.element,
  HeroHeaderB: PropTypes.element,

  displayHeroHeader: PropTypes.func,
  displayHeroButtons: PropTypes.func
};
