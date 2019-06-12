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

class CalendarComponent extends Component {
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
    this.reviewDates = this.reviewDates.bind(this);
    this.setMonthOne=this.setMonthOne.bind(this);
    this.setMonthTwo=this.setMonthTwo.bind(this);
    this.setMonthThree=this.setMonthThree.bind(this);
    this.setMonthFour=this.setMonthFour.bind(this);
  }

  onChange(date) {
    this.setState({ date });
  }

  reviewDates() {

    let requestDates = this.state.bookedDates;
    let formatDate = [];
    let dMilliSecs = [];
    let checkDateRange = [];

    let getMonth = time => {
      return new Date(time).getMonth() + 1;
    };

    let getNumDay = time => {
      return new Date(time).getDate();
    };

    for (var dString = 0; dString < requestDates.length; dString++) {
      dMilliSecs.push(new Date(requestDates[dString]).getTime());
      dMilliSecs.sort();
    }

    //===== Group day Number to corresponding month =====
    let curr1 = null,
      curr2 = null,
      curr3 = null,
      curr4 = null;
    var m1 = [],
      m2 = [],
      m3 = [],
      m4 = [];
    let z;

    for (var i = 0; i < dMilliSecs.length; i++) {
      // If user selects dates from  Month 1
      if (curr1 === null) {
        curr1 = getMonth(dMilliSecs[i]);
        m1.push(curr1, [getNumDay(dMilliSecs[i])]);
        i++;
      }

      //look at all the others except the first and push the days into the array
      if (curr1 !== null && m1[0] === getMonth(dMilliSecs[i])) {
        // console.log('push it real good' , m1[1]);
        m1[1].push(getNumDay(dMilliSecs[i]));
      }

      //If user selects dates from Month1 & Month 2
      if (curr1 < getMonth(dMilliSecs[i]) && curr2 === null) {
        curr2 = getMonth(dMilliSecs[i]);
        m2.push(curr2, [getNumDay(dMilliSecs[i])]);
        i++;
      }

      if (curr2 !== null && getMonth(dMilliSecs[i]) === m2[0]) {
        m2[1].push(getNumDay(dMilliSecs[i]));
      }

      //If user selects dates from Month1 & Month 2 & Month 3
      if (getMonth(dMilliSecs[i]) > m2[0] && curr3 === null) {
        console.log(getNumDay(dMilliSecs[i]), "i fire 3x");
        curr3 = getMonth(dMilliSecs[i]);
        m3.push(curr3, [getNumDay(dMilliSecs[i])]);
        i++;
      }

      if (getMonth(dMilliSecs[i]) > m2[0] && curr4 === null) {
        m3[1].push(getNumDay(dMilliSecs[i]));
      }

      //If user selects dates from Month1 & Month 2 & Month 3 & Month 4
      if (getMonth(dMilliSecs[i]) > m3[0] && curr4 === null) {
        curr4 = getMonth(dMilliSecs[i]);
        m4.push(curr4, [getNumDay(dMilliSecs[i])]);
        i++;
      }

      if (getMonth(dMilliSecs[i]) > m3[0] && curr4) {
        m4[1].push(getNumDay(dMilliSecs[i]));
      }
    }
    //=== Special Case ; if 4 months are visible to calendar===
    if ((curr1, curr2, curr3, curr4)) {
      let result = m3[1].pop();
    }

    console.log(Array.isArray(m1), "whats in m1");
    console.log(m2, "whats in m2");
    console.log(m3, "whats in m3");
    console.log(m4, "whats in m4");

    console.log(this.props, "DO OR DIE!")


    let testArr = [1, 2, 3, 4, 5, 6, 45, 67, 89, 99, 100, 101, 102, 103];

    //===== ===== ===== Arrange the dates in date ranges ===== ===== ===== ===== =====
    function getRanges([month, array]) {
      var ranges = [],
        rstart,
        rend;
      for (var i = 0; i < array.length; i++) {
        rstart = array[i];
        rend = rstart;
        while (array[i + 1] - array[i] == 1) {
          rend = array[i + 1]; // increment the index if the numbers sequential
          i++;
        }
        ranges.push(rstart == rend ? rstart + "" : rstart + "-" + rend);
      }
      return [month, ranges];
    }

    console.log('ALMOST THERE ' ,'m1 :', m1 , 'm1[0]:', m1[0] )

    if(m1.length > 0){
      let month = m1[0];
      let numDays = m1[1]


      this.setMonthOne(getRanges(m1)[0] ,getRanges(m1)[1] );
    }

    if(m2.length > 0){
      this.setMonthTwo(getRanges(m2)[0] ,getRanges(m2)[1] );
    }

  }

  setMonthOne(dates){
    // this.setState({
    //   monthOne: {
    //     month: dates.payload[0],
    //     numDays: dates.payload[1],
    //   },
    // });
    console.log('setMOnth1 fired from comp state')
  }

  setMonthTwo(){
    // this.setState({
    //   monthTwo:{
    //     month: month,
    //     datesInMonth: dates
    //   },
    // });
    console.log('setMOnth2 fired from comp state')
  }

  setMonthThree(){

  }

  setMonthFour(){

  }


  //===== ===== ===== ===== ===== ===== ===== ===== ===== =====
  render() {
    // console.log(this.state, "THIS IS THE TEST STATEMENT");
    console.log(this.props, 'HERE WE GO')

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
          onClick={() => {
            this.props.getRequestedDates(this.state.bookedDates)

            //DO NOT DELETE BELOW : THE ORIGINAL WORKING FNUC
            // this.reviewDates(this.state.bookedDates);
          }}
        >
          Review Dates
        </Fab>
      </Box>
    );
  }
}

export default CalendarComponent;
