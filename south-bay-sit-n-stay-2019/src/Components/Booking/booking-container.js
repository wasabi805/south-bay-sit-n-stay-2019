import { connect } from "react-redux";
import Presenter from "./booking-presenter";
import {
  getCalendarDates,
  renderCalendarModalDates
  // sendRequestToDb
} from "../../Logic/actions/calendar-actions";

import {
  handleNextBtnBookingModal,
  handleBackBtnBookingModal,
  validateBookingFormOnSubmit,
  validateBookingFormOnTyping,
  sendRequestToDb,
  onSubmitCloseConfirmBookForm,
  showConfirmBookedModal,
  resetAddDbEntryApiStatus,
  clearBookForm
} from "../../Logic/actions/booking-component-actions";

const mapStateToProps = state => {
  return {
    confirmDbEntry: state.modalReducer.confirmDbEntry,
    bookingReducer: state.bookingReducer
  };
};

const Container = connect(
  mapStateToProps,
  {
    getCalendarDates,
    renderCalendarModalDates,
    sendRequestToDb,
    handleNextBtnBookingModal,
    handleBackBtnBookingModal,
    validateBookingFormOnSubmit,
    validateBookingFormOnTyping,

    onSubmitCloseConfirmBookForm,
    showConfirmBookedModal,
    resetAddDbEntryApiStatus,
    clearBookForm
  }
)(Presenter);

export default Container;
