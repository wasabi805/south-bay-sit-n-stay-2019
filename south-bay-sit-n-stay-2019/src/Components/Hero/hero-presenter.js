import React, { Component } from "react";
import PropTypes from "prop-types";
import { styled } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";

import HeroHeaderB from "./hero-header-b";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import teal from "@material-ui/core/colors/teal";
import { HashLink as Link } from "react-router-hash-link";

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
  }

  scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  };

  displayHeroButtons = () => {
    let btn = this.props.heroContext;

    if (btn.heroButtonOne === "" && btn.heroButtonTwo === "") {
      return;
    }

    if (btn.heroButtonOne && btn.heroButtonTwo === "") {
      return <button>{btn.heroButtonOne}</button>;
    }

    if (btn.heroButtonOne && btn.heroButtonTwo) {
      return (
        <React.Fragment>

          {/*<button>*/}
            <Link
              to={"/#get-started"}
              scroll={el => this.scrollWithOffset(el, 60)}
              style={{
                padding: '2rem 6rem',
                color: 'white',
                background: '#673ab736',
                margin: '2rem 4rem',
                textDecoration: 'none',
                fontSize: '2rem',
                border: '1px solid white',
                borderRadius: '4rem',
              }}
            >
              {btn.heroButtonOne}
            </Link>
          {/*</button>*/}
          ;


            <Link
                to={"/about/#about-us"}
                onClick={() => console.log("goodbye")}
                style={{
                  padding: '2rem 6rem',
                  color: 'white',
                  background: '#673ab736',
                  margin: '2rem 4rem',
                  textDecoration: 'none',
                  fontSize: '2rem',
                  border: '1px solid white',
                  borderRadius: '4rem',
                }}

                scroll={el => this.scrollWithOffset(el, 60)}
            >
              {btn.heroButtonTwo}
            </Link>


        </React.Fragment>
      );
    }
  };

  displayHeroHeader = () => {
    let header = this.props.heroContext;

    if (header.heroHeaderBOne) {
      return (
        <HeroHeaderB
          heroHeaderBOne={header.heroHeaderBOne}
          heroHeaderBTwo={header.heroHeaderBTwo}
          heroSubHeaderB={header.heroSubHeaderB}
          button_01={header.button_01}
        />
      );
    }
  };
  render() {
    let {
      heroClassName,
      header,
      heroSubHeader,
      heroButtons,
      heroImg
    } = this.props.heroContext;

    console.log(heroClassName, "heroClassName");

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
      background: heroImg,
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

    const handleHeroButtonOne = () => {
      console.log("i fired");
    };

    return (
      <ThemeProvider theme={heroTheme}>
        <HeroWrapper className={heroClassName} button={""}>
          <Typography variant="h1">{header}</Typography>
          {this.displayHeroHeader()}
          <Typography variant="h2">{heroSubHeader}</Typography>

          <HeroButtonBox className={heroButtons}>
            {this.displayHeroButtons()}
          </HeroButtonBox>
        </HeroWrapper>
      </ThemeProvider>
    );
  }
}

export default HeroPresenter;

HeroPresenter.propTypes = {
  heroContext: PropTypes.object.isRequired,
  heroClassName: PropTypes.string,
  header: PropTypes.string,
  heroSubHeader: PropTypes.string,
  heroButtons: PropTypes.string,
  heroHeaderBOne: PropTypes.string,
  heroImg: PropTypes.string,

  displayHeroHeader: PropTypes.func,
  displayHeroButtons: PropTypes.func,

  HeroWrapper: PropTypes.element,
  HeroHeaderB: PropTypes.element
};
