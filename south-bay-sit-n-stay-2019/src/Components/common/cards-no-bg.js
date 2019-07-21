import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { DogAndBall, DogFood, DogMedicine } from "../SVG/all-svgs";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";


import {cb_context_right_img_left} from "./Themes/themes-common"


console.log(cb_context_right_img_left , 'WHAT IS cb_context_right_img_left')

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,

    margin: "auto",
    height: "20vhv",
    padding: "5% 0"
  },

  title: {
    textAlign: "center"
  },

  section1: {
    margin: theme.spacing(1, 1)
  },
  section2: {
    margin: theme.spacing(2)
  },

  section2Title: {
    margin: theme.spacing(5),
    color: "red",
    textAlign: "center"
  },

  card: {
    // border: "1px solid blue",
    maxWidth: " 20%",
    margin: theme.spacing(0, 2),
    textAlign: "center",
    fontSize: "2rem"
  },

  headerContainer: {
    marginBottom: "2rem"
  },

  textContainer: {
    padding: "0 8%"
  },

  section3: {
    margin: theme.spacing(3, 1, 1)
  }
}));

export default function CardsNoBg(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify={"center"} spacing={2}>
          <Grid item className={classes.card}>
            <DogAndBall id={"DogAndBall"} />

            <Box className={classes.textContainer}>
              {/*<h3>Active</h3>*/}



                <Typography gutterBottom variant="h2" className={classes.headerContainer}>
                  Active
                </Typography>



              <Typography color="textSecondary" variant={"body1"}>
                She's got a smile it seems to me Reminds me of childhood
                memories Where everything Was as fresh as the bright blue sky
                Now and then when I see her face She takes me away to that
                special place And if I'd stare too long I'd probably break down
                and cry Oh, oh, oh Sweet child o' mine Oh, oh, oh, oh Sweet love
                of mine
              </Typography>
            </Box>
          </Grid>
          <Grid item className={classes.card}>
            <DogFood id={"DogFood"} />
            <Box className={classes.textContainer}>
              <Typography
                gutterBottom
                variant="h2"
                className={classes.headerContainer}
              >
                Diet
              </Typography>

              <Typography color="textSecondary" variant={"body1"}>
                On a dark desert highway, cool wind in my hair Warm smell of
                colitas, rising up through the air Up ahead in the distance, I
                saw a shimmering light My head grew heavy and my sight grew dim
                I had to stop for the night. There she stood in the doorway; I
                heard the mission bell And I was thinking to myself 'This could
                be heaven or this could be Hell' Then she lit up a candle and
                she showed me the way There were voices down the corridor, I
                thought I heard them say....
              </Typography>
            </Box>
          </Grid>
          <Grid item className={classes.card}>
            <DogMedicine id={"DogMedicine"} />

            <Box className={classes.textContainer}>
              <Typography
                gutterBottom
                variant="h2"
                className={classes.headerContainer}
              >
                Care
              </Typography>

              <Typography color="textSecondary" variant={"body1"}>
                But oh how it feels so real Lying here with no one near Only you
                and you can hear me When I say softly, slowly Hold me closer
                tiny dancer Count the headlights on the highway Lay me down in
                sheets of linen You had a busy day today Hold me closer tiny
                dancer Count the headlights on the highway
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
