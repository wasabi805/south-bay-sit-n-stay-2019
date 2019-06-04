import React from "react";
import { styled } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import { palette, compose, spacing } from "@material-ui/system";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import red from "@material-ui/core/colors/red";

import teal from "@material-ui/core/colors/teal";

const CardSectionTheme = theme => {
  return createMuiTheme({
    palette: {
      primary: teal,
      text: {
        // primary: "black",
        // secondary: "#00000"
      }
    },

    typography: {
      fontFamily: "Roboto",

      h1: {
        // color: "black",
        fontSize: "3rem",
        marginBottom: "2rem",
        fontWeight: 500

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

//==========    ==========  ==========  ==========

let cardGrid = "card-grid";
const CardGrid = styled(Grid)(
  compose(
    spacing,
    palette
  )
);

const CardGridHeader = styled(Typography)(
  compose(
    spacing,
    palette
  )
);

const CardContainer = styled("div")(
  compose(
    spacing,
    palette
  )
);

//==========    ==========  ==========  ==========

const useStyles = makeStyles(theme => ({
  cardContainer: {
    display: "flex",
    justifyContent: "space-evenly"
  },

  cardContainerHeading: {
    // textAlign: 'center',
    // background: 'cyan',
    fontWeight: 300,
    letterSpacing: "1px",
    textAlign: "center"
  },

  avatar: {
    backgroundColor: red[500]
  },

  card: {
    // minWidth : 400,
    display: "inline-block",
    flex: 1,
    margin: theme.spacing(2)
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    width: "100%"
  }
}));

//==========    ==========  ==========  ==========
const CardSection = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={CardSectionTheme}>
        <CardGrid
          className={`${cardGrid}`}
          color="lime"
          // bgcolor="linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)"
          p={1}
        >
          <CardGridHeader
            className={classes.cardContainerHeading}
            variant={"h1"}
            color={"black"}
            p={6}
          >
            Explore how we can provide the best level of comfort for your pets.
          </CardGridHeader>

          <CardContainer className={classes.cardContainer}>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" className={classes.avatar}>
                    D
                  </Avatar>
                }
                title="Drop In Visits"
                image="https://sb-sit-2019.s3.amazonaws.com/dog-out-car-window.jpg"
                subheader="Have us come to you! "
              />

              <CardMedia
                className={classes.media}
                image="https://sb-sit-2019.s3.amazonaws.com/dog-out-car-window.jpg"
                title="Dog Loving the Car Ride"
              />

              <CardContent>
                <Typography
                  variant={"body2"}
                  color="textSecondary"
                  component="p"
                >
                  Lorem ipsum is a pseudo-Latin text used in web design,
                  typography, layout, and printing in place of English to
                  emphasise design elements over content. It's also called
                  placeholder (or filler) text.
                </Typography>
              </CardContent>
            </Card>

            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" className={classes.avatar}>
                    O
                  </Avatar>
                }
                title="Overnight Care"
                subheader="On site sitting"
              />

              <CardMedia
                className={classes.media}
                image="https://sb-sit-2019.s3.amazonaws.com/dog-with-lights.jpg"
                // image="https://i.ibb.co/zQBSHtg/Daredevil-The-Blind-Devil-Shirt.png"
                title="Dog Enjoying the Evening"
              />

              <CardContent>
                <Typography
                  variant={"body2"}
                  color="textSecondary"
                  component="p"
                >
                  Lorem ipsum is a pseudo-Latin text used in web design,
                  typography, layout, and printing in place of English to
                  emphasise design elements over content. It's also called
                  placeholder (or filler) text.
                </Typography>
              </CardContent>
            </Card>

            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" className={classes.avatar}>
                    B
                  </Avatar>
                }
                title="Boarding"
                subheader="Have them stay with us"
              />

              <CardMedia
                className={classes.media}
                image="https://sb-sit-2019.s3.amazonaws.com/dog-with-sitter.jpg"
                // image="https://i.ibb.co/zQBSHtg/Daredevil-The-Blind-Devil-Shirt.png"
                title="Dog Hanging with the Sitter"
              />

              <CardContent>
                <Typography
                  variant={"body2"}
                  color="textSecondary"
                  component="p"
                >
                  Lorem ipsum is a pseudo-Latin text used in web design,
                  typography, layout, and printing in place of English to
                  emphasise design elements over content. It's also called
                  placeholder (or filler) text.
                </Typography>
              </CardContent>
            </Card>
          </CardContainer>
        </CardGrid>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default CardSection;
