import React, { Component } from "react";
import CalendarContainer from "../Calendar/calendar-container";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/styles";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import CalendarModal from "../Modals/calendar-modal";

const BookingContainer = styled(Box)({
  "& h1": {
    marginBottom: "5rem"
  },
  background:
    "url('https://sb-sit-2019.s3.amazonaws.com/calendar01-transparent.png')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  backgroundSize: "55%"
});

class BookingSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //MODAL PROPS
      open: false,
      modalName: "",

      //calendar props
      bookedDates: [],
      renderDates: []
    };
  }

  //==========  ==========  CALENDAR METHODS  ==========  ==========

  //Gets the days that were clicked from react-calendar module
  getDaysClicked = days => {
    let months = this.props.getCalendarDates(days).payload.months;
    let groupedDates = this.props.renderCalendarModalDates(months).payload;
    let renderDates = [];

    let convertMonth = month => {
      return new Date(2019, parseInt(month - 1, 10), 1).toLocaleString(
        "en-us",
        { month: "long" }
      );
    };

    //TRANSLATE DATES FROM REDUCER INTO ENGLISH
    groupedDates.forEach(item => {
      let month = Object.values(item)[1];
      let days = Object.values(item)[2];

      if (month) {
        let convertedMonth = convertMonth(month);

        //ADD COMMAS TO DATES
        for (var i = 0; i < days.length - 1; i++) {
          days[i] = days[i] + ",";
        }

        renderDates.push({ month: convertedMonth, days: days });
      }
    });

    //SET STATE TO TRANSLATED DATES
    this.setState({
      renderDates: renderDates
    });
  };

  //==========  ==========  MODAL METHODS ==========  ==========
  handleOpenGenericModal = () => {
    this.setState({
      isCalendarHidden: 1,
      open: true
    });
  };

  handleCloseGenericModal = () => {
    this.setState({
      open: false,
      modalName: ""
    });
  };

  /////////////////////////////////////////////////////////////////////////////////

  // RENDER

  /////////////////////////////////////////////////////////////////////////////////
  render() {
    console.log("this.state.renderDates", this.state.renderDates);
    console.log("this.state.bookedDates", this.state.bookedDates);

    let CalendarModalBtn = styled(Button)({
      //PUT STYLES IN HERE LATER
    });

    return (
      <BookingContainer p={6} className={""}>
        <Typography variant={"h1"} align="left">
          Check out which days we can provide you service
        </Typography>

        {/*CALENDAR*/}
        <Box component="div" display="inline-block">
          <CalendarContainer getDaysClicked={this.getDaysClicked} />
        </Box>

        {/*THIS WILL OPEN THE CALENDAR MODAL*/}
        <CalendarModalBtn
          variant="outlined"
          onClick={() => this.handleOpenGenericModal()}
        >
          NEW REVIEW DATES
        </CalendarModalBtn>

        {/*THIS IS THE CALENDAR MODAL*/}
        <CalendarModal
          open={this.state.open}
          onClose={this.handleCloseGenericModal}
          renderDates={this.state.renderDates}
        />
      </BookingContainer>
    );
  }
}

export default BookingSection;

BookingSection.propTypes = {
  open: PropTypes.bool
};
