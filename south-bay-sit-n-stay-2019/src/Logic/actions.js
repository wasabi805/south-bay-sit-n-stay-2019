import {TEST_ACTION, GET_DATE_RANGES, GET_REQUESTED_DATES} from "./types";

export const testAction = (data)=>{

    console.log('test Action was clicked');

    return{
        type: TEST_ACTION,
        payload: data
    }
};


//Calendar Actions
export const getDateRanges = ([ month, array]) => {
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
     payload: [month, ranges],
   };
  
};



// export const get_nav_names =( name ) => dispatch =>{
export const getRequestedDates = ( selectedCalState ) => dispatch =>{

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

    for (
      var dString = 0;
      dString < requestDates.length;
      dString++
    ) {
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

    console.log(m1, "whats in m1");
    console.log(m2, "whats in m2");
    console.log(m3, "whats in m3");
    console.log(m4, "whats in m4");

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
        ranges.push(
          rstart == rend ? rstart + "" : rstart + "-" + rend
        );
      }
      return [month, ranges];
    }

    console.log("ALMOST THERE ", "m1 :", m1, "m1[0]:", m1[0]);

    if (m1.length > 0) {
      let month_01 = m1[0];
      let numDays_for_month_01 = m1[1];

      console.log("this is month_01: ", month_01);
      console.log(
        "this is numDays_for_month_01: ",
        numDays_for_month_01
      );
      // this.setMonthOne(this.props.getDateRanges([month ,numDays ]) );

      console.log(
        getRanges(m1)[0],
        getRanges(m1)[1],
        "FROM ACTIONS"
      );

        m1Result = 'wuTang'
    }

    if (m2.length > 0) {
      // this.setMonthTwo(getRanges(m2)[0] ,getRanges(m2)[1] );
    }


    return dispatch({
        type: GET_REQUESTED_DATES,
        payload: {
            test : "TESTING GET_REQUESTED_DATES ACTION "
        }
    })
};




// import {GET_NAV_NAMES} from '../reducers/types';
//
// export const get_nav_names =( name ) => dispatch =>{
//     console.log(name ,  "<===== IS THE ARG MAKING IT TO THE FUNC??")
//
//     let myName = `Hello my name is ${name}`;
//
//     console.log(myName)
//
//     return dispatch({
//         type : GET_NAV_NAMES ,
//         payload: myName
//     })
// };