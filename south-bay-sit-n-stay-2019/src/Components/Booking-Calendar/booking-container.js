import { connect } from "react-redux";

import Presenter from "./booking-presenter";
// import { confirmCalendarDates } from "../../Logic/actions";

const mapStateToProps = state => {
  let { monthOne, monthTwo } = state.calendarReducer;

  console.log(monthTwo, "in mapStateTOProps");

  let firstMonth, firstMonthDays, secondMonth, secondMonthDays;

  if (monthOne) {
    console.log("1st shot", monthOne);
    firstMonth = monthOne[0];
    firstMonthDays = monthOne[1];
  }

  if (monthTwo) {
    secondMonth = monthTwo[0];
    secondMonthDays = monthTwo[1];
  }

  return {
    testMe: "This is a dummy test . We go Dumb",
    firstMonth: firstMonth,
    firstMonthDays: firstMonthDays,
    secondMonth: secondMonth,
    secondMonthDays: secondMonthDays
  };
};

const Container = connect(mapStateToProps)(Presenter);

export default Container;
