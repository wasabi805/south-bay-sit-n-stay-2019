import {
  TEST_ACTION,
  CONFIRM_CALENDAR_DATES,
  RENDER_CALENDAR_MODAL_DATE,
  SET_CONTACT_FORM_FIELDS,
  SEND_REQUEST_TO_DB
} from "./types";

import axios from "axios";

export const testAction = data => {
  // console.log("test Action was clicked");
  return {
    type: TEST_ACTION,
    payload: data
  };
};

export const setContactFormFields = () => {
  return {
    type: SET_CONTACT_FORM_FIELDS,
    payload: ""
  };
};

export const sendRequestToDb = userData => {
  // console.log(userData, "THIS IS FROM sendRequestToDb on ACTIONS.js ");
  axios.post("api/booking/requests/book-now", userData);

  return {
    type: SEND_REQUEST_TO_DB
  };
};

export const getCalendarDates = selectedCalState => dispatch => {
  let requestDates = selectedCalState;
  let dMilliSecs = [];

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

  let convertDayIntoTime = arr => {
    arr.push(getNumDay(dMilliSecs[i]));
  };

  for (var i = 0; i < dMilliSecs.length; i++) {
    // If user selects dates from  Month 1
    if (curr1 === null) {
      curr1 = getMonth(dMilliSecs[i]);
      m1.push(curr1, [getNumDay(dMilliSecs[i])]);
      i++;
    }
    //look at all the others except the first and push the days into the array
    if (curr1 !== null && m1[0] === getMonth(dMilliSecs[i])) {
      convertDayIntoTime(m1[1]);
    }

    //If user selects dates from Month1 & Month 2
    if (curr1 < getMonth(dMilliSecs[i]) && curr2 === null) {
      curr2 = getMonth(dMilliSecs[i]);
      m2.push(curr2, [getNumDay(dMilliSecs[i])]);
      i++;
    }

    if (curr2 !== null && getMonth(dMilliSecs[i]) === m2[0]) {
      convertDayIntoTime(m2[1]);
    }

    //If user selects dates from Month1 & Month 2 & Month 3
    if (getMonth(dMilliSecs[i]) > m2[0] && curr3 === null) {
      curr3 = getMonth(dMilliSecs[i]);
      m3.push(curr3, [getNumDay(dMilliSecs[i])]);
      i++;
    }

    if (getMonth(dMilliSecs[i]) > m2[0] && curr4 === null) {
      convertDayIntoTime(m3[1]);
    }

    //If user selects dates from Month1 & Month 2 & Month 3 & Month 4
    if (getMonth(dMilliSecs[i]) > m3[0] && curr4 === null) {
      curr4 = getMonth(dMilliSecs[i]);
      m4.push(curr4, [getNumDay(dMilliSecs[i])]);
      i++;
    }

    if (getMonth(dMilliSecs[i]) > m3[0] && curr4) {
      convertDayIntoTime(m4[1]);
    }
  }
  //=== Special Case ; if 4 months are visible to calendar===
  if ((curr1, curr2, curr3, curr4)) {
    let result = m3[1].pop();
  }

  //uncomment for debugging
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

    // console.log('if you see this, then it works', [month, ranges])
    return [month, ranges];
  }

  //ORGANIZE SELECTED DATES INTO OBJECT TO SEND AS PROPS TO:
  // BOOKING CONTAINER --> MODAL PRESENTER .

  // (TO DISPLAY & CONFIRM USER SELECTED DATES IN MODAL)
  if (m1.length > 0) {
    monthOne = getRanges(m1)[0];
    monthOneDays = getRanges(m1)[1];
  } else {
    monthOne = "";
    monthOneDays = "";
  }

  if (m2.length > 0) {
    monthTwo = getRanges(m2)[0];
    monthTwoDays = getRanges(m2)[1];
  } else {
    monthTwo = "";
    monthTwoDays = "";
  }

  if (m3.length > 0) {
    monthThree = getRanges(m3)[0];
    monthThreeDays = getRanges(m3)[1];
  } else {
    monthThree = "";
    monthThreeDays = "";
  }

  if (m4.length > 0) {
    monthFour = getRanges(m4)[0];
    monthFourDays = getRanges(m4)[1];
  } else {
    monthFour = "";
    monthFourDays = "";
  }

  return dispatch({
    type: CONFIRM_CALENDAR_DATES,

    payload: {
      modalContext: {
        btns: {
          id: "calendar-modal",
          buttonNext: {
            name: "NEXT"
          },
          buttonBack: [{ id: "getDates" }]
        }
      },

      months: [
        { id: "month-one", name: monthOne, days: monthOneDays },
        { id: "month-two", name: monthTwo, days: monthTwoDays },
        { id: "month-three", name: monthThree, days: monthThreeDays },
        { id: "month-four", name: monthFour, days: monthFourDays }
      ],

      monthOne: monthOne,
      monthTwo: monthTwo
    }
  });
};

//this will return the updates from getCalendarDates
export const renderCalendarModalDates = obj => {
  // uncomment below for debugging.
  // console.log("IM the payload to renderCalendarModalDates", obj);

  return {
    type: RENDER_CALENDAR_MODAL_DATE,
    payload: obj
  };
};
