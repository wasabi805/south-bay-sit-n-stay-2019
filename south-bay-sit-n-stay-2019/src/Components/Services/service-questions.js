import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    // minHeight: '100vh',
    border: "1px solid purple",
    paddingBottom: "20%"
  },

  container: {
    position: "relative",

    border: "1px solid #cbc0d2",

    [theme.breakpoints.up("md")]: {
      // background: "red",
      maxWidth: "70vw",
      margin: "auto",
      marginTop: "10rem"
    }
  },

  image: {
    position: "relative",
    display: "inline-block",
    background: "white",
    order: 1,

    [theme.breakpoints.up("lg")]: {
      order: 2,
      // background: 'cyan',
      background: "#f3f3f3"
    },

    "& img": {
      [theme.breakpoints.up("lg")]: {
        position: "absolute",
        top: "6vh"
      }
    }
  },

  text: {
    position: "relative",

    // maxHeight: '90vh',
    background: "#f3f3f3",

    padding: "6rem 2rem",

    [theme.breakpoints.up("lg")]: {
      order: 2,
      // padding: '0 5rem',
      padding: "15rem 6rem"
    },

    "& h2": {
      fontSize: "3vh",
      fontWeight: 200
    },

    "& b": {
      fontSize: "1.7vh",
      lineHeight: "32px"
    },

    "& p": {
      fontSize: "2.1vh",
      fontWeight: 200,
      marginBottom: "2rem"
    }
  },

  questions: {
    display: "inline-block",
    order: 2,

    [theme.breakpoints.up("lg")]: {
      order: 1
    },

    backgroundColor: "#f3f3f3"
  }
}));

let bigDog =
  "https://sb-sit-2019.s3.amazonaws.com/cassidy-james-blaede-pYlXbIr-Dbw-unsplash-web.jpg";
let smallDog =
  "https://sb-sit-2019.s3.amazonaws.com/cassidy-james-blaede-pYlXbIr-Dbw-unsplash-web-reduced.jpg";

const ServiceQuestions = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:1279px)");

  function ShowDog() {
    const isMobile = matches;

    if (isMobile) {
      return (
        <div id={"small-img"}>
          <img src={smallDog} alt={""} />)
        </div>
      );
    }
    return (
      <img style={{ width: "48vw", height: "auto" }} src={bigDog} alt={""} />
    );
  }

  return (
    <section id={"services-questions"} className={classes.root}>
      <Grid container id={"container"} className={classes.container}>
        <Grid item className={classes.image} xs={12} lg={6}>
          <ShowDog />
        </Grid>

        <Grid item className={classes.questions} xs={12} lg={6}>
          <article className={`${classes.text} test`}>
            <h2>Common questions on Services</h2>

            <br />

            <b>What is the biggest planet in our galaxy?</b>

            <p>
              The largest planet in our solar system by far is Jupiter, which
              beats out all the other planets in both mass and volume. Jupiter's
              mass is more than 300 times that of Earth, and its diameter, at
              140,000 km, is about 11 times Earth's diameter
            </p>
            <br />

            {/*---------------*/}
            <b>Why is there such a buzz around Saturn's moon Titan?</b>

            <p>
              Titan is the largest moon of Saturn and the second-largest natural
              satellite in the Solar System. It is the only moon known to have a
              dense atmosphere.
            </p>
            <br />

            {/*---------------*/}
            <b>What is the next neighboring galaxy to milky way?</b>

            <p>
              The Andromeda Galaxy, also known as Messier 31, M31, or NGC 224
              and originally the Andromeda Nebula is a spiral galaxy
              approximately 780 kiloparsecs (2.5 million light-years) from
              Earth, and the nearest major galaxy to the Milky Way.
            </p>
            <br />

            {/*---------------*/}
            <b>What are the conditions like on Venus?</b>

            <p>
              Venus has a hellish atmosphere as well, consisting mainly of
              carbon dioxide with clouds of sulfuric acid, and scientists have
              only detected trace amounts of water in the atmosphere. The
              atmosphere is heavier than that of any other planet, leading to a
              surface pressure 90 times that of Earth.
            </p>
            <br />

            {/*---------------*/}
            <b>Is Pluto a planet?</b>

            <p>
              Pluto (minor planet designation: 134340 Pluto) is a dwarf planet
              in the Kuiper belt, a ring of bodies beyond Neptune. It was the
              first Kuiper belt object to be discovered and is the largest known
              plutoid (or ice dwarf). Pluto was discovered by Clyde Tombaugh in
              1930 as the ninth planet from the Sun.
            </p>
            <br />
          </article>
        </Grid>
      </Grid>
    </section>
  );
};

export default ServiceQuestions;
