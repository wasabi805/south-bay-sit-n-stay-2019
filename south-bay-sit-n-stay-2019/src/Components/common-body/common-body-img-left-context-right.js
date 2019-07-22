import React from "react";
import { styled } from "@material-ui/styles";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { ThemeProvider } from "@material-ui/styles";
import { cb_img_right_context_left } from "../common/Themes/themes-common";

const CommonBodyContextRightImgLeft = props => {
  const { context } = props;

  const Wrapper = styled(Grid)({
    position: "relative",
    padding: "2rem",

    maxWidth: "80%",
    margin: "auto",
    marginBottom: "3%",


  });

  const Container = styled(Box)({
    position: "absolute",
    marginLeft: "-12%",
    top: "24%"
  });

  const Header = styled(Typography)({
    fontWeight: "400",

    color: "534e59"
    // textShadow: "0 1px 1px #111111",
    // padding: "0.5rem"
  });

  const Text = styled(Typography)({
    fontWeight: "400",

    color: "#534e59",
    // textShadow: "0 1px 1px #111111",
    padding: "1rem",
    width: "100%"
  });

  const Image = styled(Grid)({
    display: "inline-block"
  });

  return (
    <Wrapper container className={`${context.wrapperColor}`}>
      <Image item xs={6}>
        <img className={context.imageClass} src={context.image} alt={""} />
      </Image>

      <Grid item xs={6}>
        <ThemeProvider theme={cb_img_right_context_left}>
          <Container>
            <Header variant={"h2"}>{context.header}</Header>

            <Text variant={"body1"}>{context.context}</Text>
          </Container>
        </ThemeProvider>
      </Grid>
    </Wrapper>
  );
};

export default CommonBodyContextRightImgLeft;
