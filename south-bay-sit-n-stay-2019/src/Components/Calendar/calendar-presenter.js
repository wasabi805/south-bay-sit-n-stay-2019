import React, { Component } from "react";
import Calendar from "react-calendar/dist/entry.nostyle";
// import Calendar from "react-calendar";
import CalendarStyles from "../../assets/style/components/calendar.scss";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";

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

      bookedDates: [],

      monthOne: {
        month: "",
        datesInMonth: []
      },

      monthTwo: {
        month: "",
        datesInMonth: []
      },

      monthThree: {
        month: "",
        datesInMonth: []
      },

      monthFour: {
        month: "",
        datesInMonth: []
      }
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(date) {
    this.setState({ date });
  }

  //===== ===== ===== ===== ===== ===== ===== ===== ===== =====
  render() {
    // console.log(this.state, "THIS IS THE TEST STATEMENT");
    console.log(this.props, "HERE WE GO");

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

    let dayClicked = val => {
      let dates = this.state.bookedDates;
      let valString = val.toDateString();
      let dateInArray = dates.indexOf(valString) >= 0;
      // if the date clicked is in the array , dateInArray is true

      if (!dateInArray) {
        dates.push(valString);
        this.setState({ bookedDates: dates });
      } else {
        let index = dates.indexOf(valString);
        dates.splice(index, 1);
        this.setState({ bookedDates: dates });
      }
      console.log(this.state.bookedDates, "this.state.bookedDate");
    };

    let disabled = this.state.bookedDates;

    //===== ===== ===== ===== ===== ===== ===== ===== ===== =====
    console.log("+++++++++++++", this.props, "+++++++++++++++");
    return (
      <Box className={"calendar-wrapper"}>
        <Card width={"100%"}>
          <Calendar
            onChange={value => dayClicked(value)}
            minDate={floor}
            maxDate={ceiling}
            // onClickDay={dayClicked()}

            //Toggle calendar day tile when clicked
            tileClassName={({ date, view }) => {
              if (disabled.indexOf(date.toDateString()) >= 0) {
                return "i-am-booked";
              } else {
                return null;
              }
            }}
          />
        </Card>

        <Fab
          //DO NOT DELETE BELOW : THE ORIGINAL WORKING FNUC
          // this.reviewDates(this.state.bookedDates);
          // onClick={() => this.props.confirmCalendarDates(this.state.bookedDates)}

          onClick={() => {
            this.props.confirmCalendarDates(this.state.bookedDates);
            this.props.openModal(); //THIS DEFINITELY NEEDS TO BE HERE
          }}
        >
          Review Dates
        </Fab>
      </Box>
    );
  }
}

export default CalendarPresenter;
