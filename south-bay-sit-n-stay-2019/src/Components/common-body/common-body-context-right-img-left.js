import React from "react";
import { styled } from "@material-ui/styles";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { ThemeProvider } from "@material-ui/styles";
import { cb_context_right_img_left } from "../common/Themes/themes-common";



const useStyles = makeStyles(theme => ({
    root:{
      width :'100%'
    },

}));





const CommonBodyContextRightImgLeft = props => {
  const { context } = props;
  const classes = useStyles();

  const Wrapper = styled(Grid)({
    position: "relative",
    padding: "2rem",
    maxWidth: "75%",
    margin: "auto",
    marginBottom: "3%",



  });

  const Container = styled(Box)({
    top: "18%",
    position: "absolute",
    // top: '18%',
    border: "1px solid #7300ffa8",
    margin: '0 31% 0 0',
    // marginRight: "42%"
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
    // textShadow: "0 1px 1px #111111",
    padding: "1rem",
    width: "100%"
  });

  const Image = styled(Grid)({
    display: "inline-block"
  });

  return (
    <Wrapper container >
      <Grid item xs={6}>

        <ThemeProvider theme={cb_context_right_img_left}>

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
