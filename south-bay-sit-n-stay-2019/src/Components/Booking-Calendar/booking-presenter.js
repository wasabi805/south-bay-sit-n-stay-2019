import React, { Component } from "react";
import CalendarComponent from "./calendarComponent";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SimpleModal from "../Modal/modal";

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

// const classes = useStyles();

class BookingSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Box p={6} className={useStyles.bookingContainer}>
        <Typography variant={"h1"} align="left">
          Check out which days we can provide you service
        </Typography>

        <button>THIS DOT PROPS</button>

        <Box
          component="div"
          display="inline-block"
          // width={"100%"}
          // height={"600px"}
          // maxWidth={"84rem"}
        >
          <CalendarComponent getRequestedDates={this.props.getRequestedDates} />
          <SimpleModal />
        </Box>
      </Box>
    );
  }
}

export default BookingSection;

BookingSection.propTypes = {};
