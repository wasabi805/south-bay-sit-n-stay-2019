import { connect } from "react-redux";
import Presenter from "./booking-presenter";
import {getCalendarDates, renderCalendarModalDates, sendRequestToDb  } from "../../Logic/actions"

import {handleNextBtnBookingModal , validateBookingFormOnSubmit , validateBookingFormOnTyping} from "../../Logic/actions/booking-component-actions"

const mapStateToProps = state => {

  return {
    confirmDbEntry : state.modalReducer.confirmDbEntry,
    bookingReducer : state.bookingReducer
  };
};

const Container = connect(mapStateToProps, {getCalendarDates, renderCalendarModalDates, sendRequestToDb, handleNextBtnBookingModal, validateForm: validateBookingFormOnSubmit , validateBookingFormOnTyping})(Presenter);

export default Container;
