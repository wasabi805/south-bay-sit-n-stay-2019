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

const CardSectionTheme = theme => {
  return createMuiTheme({
    palette: {
      primary: teal,
      text: {}
    },

    typography: {
      fontFamily: "Roboto",

      h2: {
        fontSize: "0.75em",
        fontWeight: 300,
        // color: 'black',
        color: "pink"
      },

      h3: {
        color: "pink"
      },

      subtitle1: {
        color: "blue"
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
  )
);

//==========    ==========  ==========  ==========

let useStyles = makeStyles(theme => ({
  cardContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: "5%",
    maxWidth: "85vw",

    //MEDIA QUERY
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100vw",
      display: "block"
    }
  },

  cardGrid: {
    maxWidth: "210rem",
    minHeight: "80vh",
    display: "inline-block",

    textAlign: "-webkit-center"
  },

  cardContainerHeading: {
    color: "#5a5a5a",
    fontWeight: 300,
    letterSpacing: "1px",
    textAlign: "center"
  },

  avatar: {
    backgroundColor: red[500],
    textIndent: 0,
    fontSize: "2rem"
  },

  card: {
    display: "inline-block",
    flex: 1,

    margin: theme.spacing(2),

    [theme.breakpoints.down("sm")]: {
      margin: " 1vh 10%"
    }
  },

  cardText: {
    textAlign: "initial",
    padding: "0 8%",
    fontWeight: 200
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    width: "100%",
    backgroundSize: "contain"
  },

  cardHeader: {
    fontSize: "3rem",
    textIndent: "-8rem"
  }
}));

//==========    ==========  ==========  ==========
const CardSectionComponent = props => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={CardSectionTheme}>
      <CardGrid className={classes.cardGrid} p={1} id={props.body_01.id}>
        <CardGridHeader
          className={classes.cardContainerHeading}
          variant={"h3"}
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
                  className={classes.cardHeader}
                  titleTypographyProps={{ variant: "h4" }}
                  subheaderTypographyProps={{ variant: "h5" }}
                  avatar={
                    <Avatar
                      aria-label={card.ariaLabel}
                      className={classes.avatar}
                    >
                      {card.avatarLetter}{" "}
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
                  <Box className={classes.cardText} fontSize={16}>
                    {card.cardContext}
                  </Box>
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
