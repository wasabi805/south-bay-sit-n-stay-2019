import React from "react";
import { styled } from "@material-ui/styles";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { ThemeProvider } from "@material-ui/styles";
import { sectionHeader } from "../common/Themes/themes-common";

const CommonBodyContextRightImgLeft = props => {
  const { context } = props;

  const Wrapper = styled(Grid)({
    position: "relative",
    padding: "2rem",
    maxWidth: "75%",
    margin: "auto",
    marginBottom: "15%"
  });

  const Container = styled(Box)({
    top: "18%",
    position: "absolute",
    // top: '18%',
    border: "1px solid lime",
    marginRight: "42%"
  });

  const Header = styled(Typography)({
    fontWeight: "400",
    background: "#7300ffa8",
    color: "cornsilk",
    textShadow: "0 1px 1px #111111",
    padding: "1rem"
  });

  const Text = styled(Typography)({
    fontWeight: "400",
    background: "#7300ffa8",
    color: "cornsilk",
    textShadow: "0 1px 1px #111111",
    padding: "1rem",
    width: "100%"
  });

  const Image = styled(Grid)({
    display: "inline-block"
  });

  return (
    <Wrapper container className={`${context.wrapperColor}`}>
      <Grid item xs={6}>
        <ThemeProvider theme={sectionHeader}>
          <Container id={"myRoot"}>
            <Header variant={"h2"}>{context.header}</Header>

            <Text variant={"body1"}>{context.context}</Text>
          </Container>
        </ThemeProvider>
      </Grid>

      <Image item xs={6}>
        <img className={context.imageClass} src={context.image} alt={""} />
      </Image>
    </Wrapper>
  );
};

export default CommonBodyContextRightImgLeft;
