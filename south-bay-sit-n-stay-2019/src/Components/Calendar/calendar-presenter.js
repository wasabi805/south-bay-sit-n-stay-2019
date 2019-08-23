import React, { Component } from "react";
import Calendar from "react-calendar/dist/entry.nostyle";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  calendarWrapper: {
    backgroundColor: "orange"
  },

  card: {
    maxWidth: 345
  },

  test: ""
}));

class CalendarPresenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      expired: "",
      bookedDates: []
    };
  }
  //PART I : STORES OR REMOVES THE CLICKED DATE IN COMP STATE.
  dayClicked = val => {
    let dates = this.state.bookedDates;

    let valString = val.toDateString();
    let dateInArray = dates.indexOf(valString) >= 0;

    // if the date is not in the array , push it into the array(this.state.bookedDates).
    if (!dateInArray) {
      dates.push(valString);
      this.setState({ bookedDates: dates });
    }

    //if the date is already in there and the button is clicked again, remove the date from the array (this.state.bookedDates)
    else {
      let index = dates.indexOf(valString);
      dates.splice(index, 1);
      this.setState({ bookedDates: dates });
    }

    // PART II :
    //SENDS THE CLICKED DATES BACK TO BOOKING PRESENTER --> BOOKING PRESENTER SENDS THE DATES TO MODAL FOR DISPLAY
    this.props.getDaysClicked(dates);
  };

  //PART III : PAINT THE CLICKED DAYS
  paintDayClicked = ({ date, view }) => {
    let disabled = this.state.bookedDates;

    if (disabled.indexOf(date.toDateString()) >= 0) {
      return "i-am-booked";
    } else {
      return null;
    }
  };


  //===== ===== ===== ===== ===== ===== ===== ===== ===== =====
  render() {
    //Ceiling on Future Calendar Days
    //ref : https://stackoverflow.com/questions/563406/add-days-to-javascript-date
    Date.prototype.addDays = function(days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };
    var date = new Date();
    let ceiling = date.addDays(90);

    //Floor on Calendar date
    let floor = new Date();
    //===== ===== ===== ===== ===== ===== ===== ===== ===== =====

    //===== ===== ===== ===== ===== ===== ===== ===== ===== =====


    return (
        <Calendar
          onChange={value => this.dayClicked(value)}
          minDate={floor}
          maxDate={ceiling}
          minDetail={"month"} //disables user from selecting months that are centuries away.
          //paints the tiles that are clicked
          tileClassName={({ date, view }) => {
            return this.paintDayClicked({ date, view });
          }}
        />

    );
  }
}

export default CalendarPresenter;

CalendarPresenter.propTypes={
  getDaysClicked : PropTypes.func.isRequired
};