import React, { Component } from "react";
import PropTypes from "prop-types";
import { styled } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import HeroHeaderB from "./hero-header-b";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { ButtonTypeOne } from "../common/buttons";

const useStyles = makeStyles(theme =>({
  root:{
    minWidth: "100vw",
    height: "100vh",
    position: "relative",
    display: "flex",

    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    padding: "2rem",
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
      zIndex: 5,
      fontSize: '4rem',
      color:"white",
      fontWeight: '200',
      lineHeight:1,

      [theme.breakpoints.up("md")]: {
        fontSize: "5rem",
        lineHeight: 2
      },
    },

    "& h6":{
      color:"white",
      fontWeight:'100',
      lineHeight: 1
    }
  },

  buttonContainer:{
    position: "relative",
    padding: 0,

    display:"flex",
    flexDirection: 'column',
    width: "auto",
    color: "white",
    marginTop: "3rem",
    zIndex: 10,

    [theme.breakpoints.up("sm")]: {
      display: "block"
    },

    "& button": {
      color: "white",
      fontSize: "2rem",
      margin: "6px",
      borderRadius: "5rem",
      padding: "12px 7.5rem",
      backgroundColor: "#673ab736"
    }
  }



}));





const HeroPresenter =(props)=>{
  const classes = useStyles();

  const displayHeroHeader = () => {
    let header = props.heroContext;

    if(header.heroHeaderBOne) {
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


  let heroBg = props.heroContext.heroImg;

    let btn = props.heroContext;

    let {
      heroClassName,
      header,
      heroSubHeader,
      heroButtons,
      heroImg
    } = props.heroContext;

    return (
      <ThemeProvider theme={heroButtons}>
        <section className={classes.root} style={{background: heroBg , backgroundSize: 'cover'}} >
          <h2>{header}</h2>

          {displayHeroHeader()}

          <Typography variant="h6" style={{color:"white"}} >{heroSubHeader}</Typography>

          <div className={classes.buttonContainer}>
              <ButtonTypeOne buttons={btn.buttons} />
          </div>

        </section>
      </ThemeProvider>
    );
  };


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
