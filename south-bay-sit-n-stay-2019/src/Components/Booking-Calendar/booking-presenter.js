import React from "react";
import CalendarComponent from "./calendarComponet";

import { styled } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import { palette, compose, spacing } from "@material-ui/system";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import teal from "@material-ui/core/colors/teal";
import red from "@material-ui/core/colors/red";

let useStyles = makeStyles(theme => ({
  bookingContainer: {
    background:
      "url('https://sb-sit-2019.s3.amazonaws.com/calendar01-transparent.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundSize: "55%"
  }
}));

const BookingSection = () => {
  const classes = useStyles();
  return (
    <Box p={6} className={classes.bookingContainer}>
      <Typography variant={"h1"} align="left">
        Check out which days we can provide you service
      </Typography>

      <Box
        component="div"
        display="inline-block"
        width={"50%"}
        maxWidth={"84rem"}
      >
        <CalendarComponent />
      </Box>
    </Box>
  );
};

export default BookingSection;
