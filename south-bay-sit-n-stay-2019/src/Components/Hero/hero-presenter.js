import React, { Component } from "react";
import PropTypes from "prop-types";
import { styled } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/styles";

import HeroHeaderB from "./hero-header-b";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { ButtonTypeOne } from "../common/buttons";

class HeroPresenter extends Component {
  constructor(props) {
    super(props);
  }

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
    let btn = this.props.heroContext;

    let {
      heroClassName,
      header,
      heroSubHeader,
      heroButtons,
      heroImg
    } = this.props.heroContext;

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

    return (
      <ThemeProvider theme={heroButtons}>
        <HeroWrapper className={heroClassName} button={""}>
          <Typography variant="h1">{header}</Typography>

          {this.displayHeroHeader()}

          <Typography variant="h2">{heroSubHeader}</Typography>

          <HeroButtonBox className={heroButtons}>
            <ButtonTypeOne buttons={btn.buttons} />
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
