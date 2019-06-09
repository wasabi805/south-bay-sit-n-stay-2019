import React from "react";
import CalendarComponent from "./calendarComponet";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";


let useStyles = makeStyles(theme => ({
  bookingContainer: {
    "& h1": {
      marginBottom: "5rem"
    },
    background:
      "url('https://sb-sit-2019.s3.amazonaws.com/calendar01-transparent.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    backgroundSize: "55%"
  }
}));

const BookingSection = (props) => {
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

BookingSection.propTypes={

};