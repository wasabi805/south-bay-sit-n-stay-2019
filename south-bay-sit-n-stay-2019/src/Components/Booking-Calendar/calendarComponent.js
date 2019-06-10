import React, { Component } from "react";
import Calendar from "react-calendar/dist/entry.nostyle";
// import Calendar from "react-calendar";
import CalendarStyles from "../../assets/style/components/calendar.scss";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  }
}));

class CalendarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      expired: "",
      bookedDates: []
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(date) {
    this.setState({ date });
  }
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

    let dayClicked = val => {
      let dates = this.state.bookedDates;
      let valString = val.toDateString();
      let dateInArray = dates.indexOf(valString) >= 0;
      // if the date clicked is in the array dateInArray is true

      if (!dateInArray) {
        dates.push(valString);
        this.setState({ bookedDates: dates });
      } else {
        let index = dates.indexOf(valString);
        dates.splice(index, 1);
        this.setState({ bookedDates: dates });
      }
    };

    let disabled = this.state.bookedDates;

    return (
      <Box width={"100%"}>

          <Calendar
            className={CalendarStyles["react-calendar"]}
            onChange={value =>
              // console.log(value.toString())
              dayClicked(value)
            }
            // value={[new Date(2019, 6, 15), new Date(2019, 6, 18)]}
            minDate={floor}
            maxDate={ceiling}
            // onClickDay={dayClicked()}

            tileClassName={({ date, view }) => {
              if (disabled.indexOf(date.toDateString()) >= 0) {
                return 'i-am-booked';
              } else {
                return null;
              }
            }}
          />
      </Box>
    );
  }
}

export default CalendarComponent;
