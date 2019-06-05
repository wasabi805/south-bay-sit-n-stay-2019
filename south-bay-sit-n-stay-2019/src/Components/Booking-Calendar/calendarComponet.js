import React, { Component } from "react";
import Calendar from "react-calendar/dist/entry.nostyle";
import CalendarStyles from "../../assets/style/components/calendar.scss";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  }
}));

class CalendarComponet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      expired: ""
    };

    this.onChange = this.onChange.bind(this);
  }
  onChange(date) {
    this.setState({ date }, () => {});
  }

  componentDidMount() {
    var todaysDate = this.state.date.getTime();

    let domDateWrapper = document.getElementsByTagName("abbr"); //Date in DOM lives here.
    let calendarTile = document.getElementsByClassName("react-calendar__tile"); //calendar tile that domDateWrapper lives in.

    function formatter(a, b, c) {
      return new Date(c, a - 1, b).getTime();
    }

    let pastDaysCount = 0;
    let formattedDates = [];

    //  Step 1: Get the calendar dates converted int integers

    //This will grab the calendar date, will need to compare against today's date
    for (var i = 0; i < domDateWrapper.length; i++) {
      let thisDate = domDateWrapper[i].getAttribute("aria-label");
      let pastDate = thisDate.split(" ");
      let dateSet = [];

      //convert months from their literal string names to integer corresponding to that month ...
      pastDate.forEach(d => {
        switch (d) {
          case "April":
            d = 4;
            break;

          case "May":
            d = 5;
            break;

          case "June":
            d = 6;
            break;
          //will add remaining months later..
        }

        //once months converted to numbers, push months, day, and year into dateSet array
        dateSet.push(d);
      });
      //collect each set of formatted dates from dateSet Array and collect them in parent formatted date array.
      formattedDates.push(dateSet);
    }

    //If the date is less than today , here is how you will color it.. you'll see this in use later below
    // for(var k=0; k<x.length; k++){
    //     // console.log(z[i].getAttribute('aria-label'))
    //     console.log(x[k].style.backgroundColor='cyan')
    // }

    //step 2: Assign Month , Day , && Year to their own vars....

    console.log(formattedDates, "does this work??");
    for (var q = 7; q < formattedDates.length; q++) {
      let a = null,
        b = null,
        c = null;
      let dateSet = formattedDates[q];

      if (a === null) {
        a = dateSet[0];
      }

      if (b === null) {
        b = parseInt(dateSet[1], 10);
      }

      if (c === null) {
        c = parseInt(dateSet[2], 10);
      }

      //  Step 3 : Format the Date and compare against today's date

      //Now that each date element is assigned to a an individual var, insert each var into calendarDate formatter..
      let calendarDate = formatter(a, b, c);

      //How many dates are in the past?
      if (calendarDate < todaysDate) {
        pastDaysCount = pastDaysCount + 1;
      }
    }

    //Step 4:
    // Now that we know count, paint the calendar tiles of dates in the past.
    for (var k = 0; k < pastDaysCount - 1; k++) {
      calendarTile[k].style.backgroundColor = "#7b84a4";
    }
  }

  render() {
    return (
      <Box width={"100%"}>
        <Card>
          <Calendar
            className={CalendarStyles["react-calendar"]}
            onClickDay={this.getDay}
            onChange={this.onChange}
            value={this.state.date}
          />
        </Card>
      </Box>
    );
  }
}

export default CalendarComponet;
