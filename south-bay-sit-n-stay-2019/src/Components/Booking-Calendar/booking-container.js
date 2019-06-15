import { connect } from "react-redux";
import Presenter from "./booking-presenter";

const mapStateToProps = state => {
  // uncomment for debugging calendar comp
  // console.log(state.calendarReducer, "..... THIS IS THE PARENT CONTAINER for CALENDAR props (booking-container.js) inside mapStateTOProps *************************");
  return {
    // ALL of the selected calendar dates are stored here. Data gets sent to modal component to display selected dates
    months: state.calendarReducer.months
  };
};

const Container = connect(mapStateToProps)(Presenter);

export default Container;
