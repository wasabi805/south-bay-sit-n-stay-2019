import React from "react";
import PropTypes from "prop-types";
import { styled } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import { palette, compose, spacing } from "@material-ui/system";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import red from "@material-ui/core/colors/red";
import teal from "@material-ui/core/colors/teal";
import classNames from "classnames";

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
      fontSize: "24",

      h1: {
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

const CardContainer = styled(Box)(
  compose(
    spacing,
    palette
  ),
);

//==========    ==========  ==========  ==========

let useStyles = makeStyles(theme => ({
  cardContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: "5%",
    maxWidth: "85vw",
    // backgroundColor: "#de0063",
    // backgroundImage: "radial-gradient(circle farthest-side at left top, #00bcde, #640487 125%)",
  },

  cardGrid: {
    maxWidth: "210rem",
    minHeight: "80vh",
    display: "inline-block"
  },

  cardContainerHeading: {
    color: "#5a5a5a",
    fontWeight: 300,
    letterSpacing: "1px",
    textAlign: "center"
  },

  avatar: {
    backgroundColor: red[500]
  },

  card: {
    display: "inline-block",
    flex: 1,
    margin: theme.spacing(2)
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    width: "100%",
    backgroundSize: 'contain'
  }
}));

//==========    ==========  ==========  ==========
const CardSectionComponent = props => {
  const classes = useStyles();

  console.log(props, "WHAT ARE THE PROPS");

  return (
    <ThemeProvider theme={CardSectionTheme}>
      <CardGrid className={classes.cardGrid} p={1} id={props.body_01.id}>
        <CardGridHeader
          className={classes.cardContainerHeading}
          variant={"h1"}
          color={"black"}
          p={6}
        >
          {/*CARD GRID HEADER*/}
          {props.body_01.header}
        </CardGridHeader>

        {/*CARD CONTAINER*/}
        <CardContainer className={classes.cardContainer}>
          {props.body_01.context.map(card => {
            return (
              <Card key={card.id} className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar
                      aria-label={card.ariaLabel}
                      className={classes.avatar}
                    >
                      {card.avatarLetter}{" "}
                      {console.log(card.class, "what is card?")}
                    </Avatar>
                  }
                  title={card.title}
                  subheader={card.subHeader}
                />

                <CardMedia
                  className={classes.media}
                  image={card.imgOrIcon}
                  title={card.imgTitle}
                />

                <CardContent>
                  <Typography
                    variant={"body2"}
                    color="textSecondary"
                    component="p"
                  />
                  <Box fontSize={16}>{card.cardContext}</Box>
                </CardContent>
              </Card>
            );
          })}
        </CardContainer>
      </CardGrid>
    </ThemeProvider>
  );
};

export default CardSectionComponent;

CardSectionComponent.propTypes = {
  body_01: PropTypes.object
};
