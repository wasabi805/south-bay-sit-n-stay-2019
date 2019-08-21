import React from "react";
import { styled } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up("md")]: {
      background: "red"
    }
  },

  circleCut: {
    display: "inline-block",
    width: "16%",
    height: "57%",

    left: "24%",
    overflow: "hidden",
    position: "relative",
    border: "1px solid orange",

    "&::after": {
      content: " '' ",
      width: "100px",
      height: "100px",
      background: "rgba(0, 0, 0, 0)",
      borderRadius: "100px",
      position: "absolute",
      top: "-40px",
      left: "-103px",
      border: "40px solid rgb(64, 64, 64)"
    }
  },

  text_wrapper: {
    position: "absolute",
    display: "inline-block",
    height: " 100%",
    width: "61%",
    border: "1px solid lime",
    top: 0,
    bottom: 0,
    marginLeft: "20%"
  },

  circleImg: {
    height: "21vw",
    width: "21vw",
    display: "inline-block",
    borderRadius: "50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: 1,
    float: "left",
    shapeOutside: "circle(50% at 50% 50%) border-box",
    "-webkit-shape-outside": "circle(50%)",
    marginRight: "3rem",
    boxShadow: "2px 9px 25px -9px #2e7a82"
  }
}));

const CommonBodyContextRightImgLeft = props => {
  const { context } = props;
  const classes = useStyles();

  const MainWrapper = styled(Box)({
    position: "relative",
    padding: "7rem"
  });

  return (
    <MainWrapper
      container
      className={`${context.wrapperColor}`}
      style={{ margin: "2rem 0", zIndex: 2 }}
    >
      <div className={"vert-title-container"}>
        <h2 className={"title"}>{context.header2 ? context.header2.toUpperCase() : ""}</h2>
      </div>

      <div id={"image-and-text"}>
        <div className="container">
          <div
            className={classes.circleImg}
            style={{
              backgroundImage: `url("${props.circleImg}")`,
              backgroundPosition: `${context.bgImgPos}`
            }}
          />

          <p className={"text"}>
            <span className={"first-character"}>H</span>
            ello and welcome!, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          {/*PRICES*/}
          <div className={"price"}>
            <h2>PRICE</h2>
            <h3> $ </h3>
            <p className={"cost"}>39</p>
            <p className={"service-type"}>per visit</p>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default CommonBodyContextRightImgLeft;
