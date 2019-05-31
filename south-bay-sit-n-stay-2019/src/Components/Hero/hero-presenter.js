import React from "react";
import { styled } from "@material-ui/styles";
import Container from "@material-ui/core/Container";

const HeroPresenter = props => {
  const HeroWrapper = styled(Container)({
    minWidth: "100vw",
    height: "80vh",
    position: "relative",
    display: "block",
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
    }
  });

  const HeroContext = styled(Container)({
    position: "relative",
    width: "90%",
    left: 0,
    right: 0,
    paddingTop: "30rem",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    zIndex: 2,

    "& h1": {
      fontSize: "5.7rem",
      zIndex: 2,
      fontWeight: "lighter",
      paddingBottom: "2rem"
    },

    "& h2": {
      fontSize: "1.9rem",
      zIndex: 2,
      fontWeight: "lighter"
    }
  });

  const HeroButtonContainer = styled(Container)({
    position: "relative",
    display: "inline-flex",
    flexDirection: "column",
    padding: 0,

    width: "auto",
    color: "white",
    marginTop: "3rem",

    "& button": {
      color: "white",
      fontSize: "3rem",
      margin: "6px",
      borderRadius: "5rem",
      padding: "12px 7.5rem",
      backgroundColor: "#00fff830"
    }
  });

  //TODO : Have the props from LandingPresenter Passes as an Object then map

  return (
    <HeroWrapper className={props.heroClassName}>
      <HeroContext className={props.heroContext}>
        <h1> {props.heroHeader}</h1>
        <h2>{props.heroSubHeader}</h2>

        <HeroButtonContainer className={props.heroButtons}>
          <button>{props.heroButtonOne}</button>
          <button>{props.heroButtonTwo}</button>
        </HeroButtonContainer>
      </HeroContext>
    </HeroWrapper>
  );
};

export default HeroPresenter;
