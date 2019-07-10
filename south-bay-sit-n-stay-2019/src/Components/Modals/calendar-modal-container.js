import { connect } from "react-redux";
import Presenter from "./calendar-modal-presenter";
import {getCalendarDates, renderCalendarModalDates, sendRequestToDb } from "../../Logic/actions"

import {handleNextBtnBookingModal, handleBackBtnBookingModal} from "../../Logic/actions/booking-component-actions"

const mapStateToProps = state => {

    return {
        confirmDbEntry : state.modalReducer.confirmDbEntry,
        modalViewzzz : state.bookingReducer
    };
};

const Container = connect(mapStateToProps, {getCalendarDates, renderCalendarModalDates, sendRequestToDb, handleNextBtnBookingModal, handleBackBtnBookingModal})(Presenter);

export default Container;