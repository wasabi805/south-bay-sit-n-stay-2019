import { connect } from "react-redux";
import Presenter from "./booking-modal-presenter";
import {
  getCalendarDates,
  renderCalendarModalDates
} from "../../Logic/actions/calendar-actions";

import {
  handleNextBtnBookingModal,
  handleBackBtnBookingModal,
  selectSvc
} from "../../Logic/actions/booking-component-actions";

const mapStateToProps = state => {
  return {
    bookingReducer: state.bookingReducer,
    serviceType: state.bookingReducer.serviceType,
    requestedServiceType: state.bookingReducer.requestedServiceType,

    confirmDbEntry: state.modalReducer.confirmDbEntry
  };
};

const Container = connect(
  mapStateToProps,
  {
    getCalendarDates,
    renderCalendarModalDates,
    handleNextBtnBookingModal,
    handleBackBtnBookingModal,
    selectSvc
  }
)(Presenter);

export default Container;
