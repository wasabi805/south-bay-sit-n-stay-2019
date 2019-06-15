import {
  TEST_ACTION,
  GET_DATE_RANGES,
  CONFIRM_CALENDAR_DATES,
  RENDER_CALENDAR_MODAL_DATE
} from "./types";

export const testAction = data => {
  console.log("test Action was clicked");

  return {
    type: TEST_ACTION,
    payload: data
  };
};

//Calendar Actions
export const getDateRanges = ([month, array]) => {
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

  return {
    type: GET_DATE_RANGES,
    payload: [month, ranges]
  };
};

// export const get_nav_names =( name ) => dispatch =>{
export const confirmCalendarDates = selectedCalState => dispatch => {
  let requestDates = selectedCalState;
  let formatDate = [];
  let dMilliSecs = [];
  let checkDateRange = [];

  let m1Result = null;

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

  // console.log(m1, "whats in m1");
  // console.log(m2, "whats in m2");
  // console.log(m3, "whats in m3");
  // console.log(m4, "whats in m4");

  let monthOne, monthTwo, monthThree, monthFour;
  let monthOneDays, monthTwoDays, monthThreeDays, monthFourDays;

  //===== ===== ===== Arrange the dates in date ranges ===== ===== ===== ===== =====
  function getRanges([month, array]) {
    var ranges = [],
      rstart,
      rend;
    for (var i = 0; i < array.length; i++) {
      rstart = array[i];
      rend = rstart;
      while (array[i + 1] - array[i] == 1) {
        rend = array[i + 1] + " "; // increment the index if the numbers sequential
        i++;
      }
      ranges.push(
        rstart == rend ? " " + rstart + " " : " " + rstart + "-" + rend
      );
    }
    return [month, ranges];
  }

  console.log("ALMOST THERE ", "m1 :", m1, "m1[0]:", m1[0]);

  //ORGANIZE SELECTED DATES INTO OBJECT TO SEND AS PROPS TO:
  // BOOKING CONTAINER --> MODAL PRESENTER .

  // (TO DISPLAY & CONFIRM USER SELECTED DATES IN MODAL)
  if (m1.length > 0) {
    monthOne = getRanges(m1)[0];
    monthOneDays= getRanges(m1)[1]

  } else {
    monthOne = "";
    monthOneDays = ""
  }

  if (m2.length > 0) {
    monthTwo = getRanges(m2)[0];
    monthTwoDays = getRanges(m2)[1]
  } else {
    monthTwo = "";
    monthTwoDays=""
  }

  if (m3.length > 0) {
    monthThree = getRanges(m3)[0];
    monthThreeDays = getRanges(m3)[1]
  } else {
    monthThree = "";
    monthThreeDays=""
  }

  if (m4.length > 0) {
    monthFour = getRanges(m4)[0];
    monthFourDays = getRanges(m4)[1]
  } else {
    monthFour = "";
    monthFourDays=""
  }


  return dispatch({
    type: CONFIRM_CALENDAR_DATES,

    payload: {
      months : [
        {id: 'month-one' , name: monthOne ,  days : monthOneDays },
        {id: 'month-two' , name: monthTwo ,  days : monthTwoDays},
        {id: 'month-three' , name: monthThree ,  days : monthThreeDays},
        {id: 'month-four' , name: monthFour ,  days : monthFourDays},
      ],

      monthOne: monthOne,
      monthTwo: monthTwo
    }
  });
};

export const renderCalendarModalDates = obj => {
  //this will return the updates from confirmCalendarDates

  console.log("IM the payload to renderCalendarModalDates", obj);

  return {
    type: RENDER_CALENDAR_MODAL_DATE,
    payload: obj
  };
};
