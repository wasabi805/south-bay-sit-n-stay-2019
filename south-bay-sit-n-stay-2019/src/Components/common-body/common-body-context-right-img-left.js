import React from "react";
import { styled } from "@material-ui/styles";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ThemeProvider } from "@material-ui/styles";
import { cb_img_right_context_left } from "../common/Themes/themes-common";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: "75%",
    zIndex: 1,

    [theme.breakpoints.up("md")]: {}
  },

  textContainer: {
    top: "10%",
    position: "absolute",
    // background: "#7300ffa8",
    margin: "0 31% 0 0",

    [theme.breakpoints.up("md")]: {
      margin: "0 46% 0 0",
      paddingBottom: "2%",
      padding: "4rem"
    },

    [theme.breakpoints.up("lg")]: {
      margin: "0 46% 0 0",
      paddingBottom: "10%",
      padding: "4rem"
    }
  }
}));

const CommonBodyContextRightImgLeft = props => {
  const { context } = props;

  const MainWrapper = styled(Grid)({
    // position: "relative",
    // padding: "2rem",
    //
    // maxWidth: "80%",
    // margin: "auto",
    // marginBottom: "3%",
    // zIndex: 1,
    marginBottom: "3rem"
  });

  const Container = styled(Box)({
    position: "absolute",
    // marginLeft: "-12%",
    // top: "24%"
    color: "white",
    zIndex: 1,
    background: "#00000047",

    marginLeft: "10%"
  });

  const Header = styled(Typography)({
    fontWeight: "400",

    color: "534e59",
    textShadow: "0 1px 1px #111111"
    // padding: "0.5rem"
  });

  const Text = styled(Typography)({
    fontWeight: "400",

    // color: "#534e59",
    color: "white",
    textShadow: "0 1px 1px #111111",
    padding: "1rem",
    width: "100%"
  });

  const Image = styled(Box)({
    position: "relative",
    height: "10vw",
    width: "10vw",
    margin: "auto",
    background: "blue",
    borderRadius: "50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "20% 50%",
    // display: "inline-block",
    backgroundImage:
      "url('https://sb-sit-2019.s3.amazonaws.com/zack-dowdy-NMVXMIsXas8-unsplash-768px.jpg')"
  });

  const ImageWrapper = styled(Grid)({
    position: "relative"
  });

  const TextWrapper = styled(Grid)({
    position: "relative"
  });

  return (
    <MainWrapper container className={`${context.wrapperColor}`}>
      <TextWrapper
        id={"text-wrapper"}
        item
        xs={7}
        style={{ position: "relative" }}
      >
        <ThemeProvider theme={cb_img_right_context_left}>
          <Container>
            <Header variant={"h2"}>{context.header}</Header>
            <Text variant={"body1"}>{context.context}</Text>
          </Container>
        </ThemeProvider>
      </TextWrapper>

      <ImageWrapper id={"img-wrapper"} item xs={5}>
        <Image id={"myImg"} />
      </ImageWrapper>
    </MainWrapper>
  );
};

export default CommonBodyContextRightImgLeft;
