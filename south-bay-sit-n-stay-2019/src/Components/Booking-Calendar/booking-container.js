import { connect } from "react-redux";
import Presenter from "./booking-presenter";
import {getCalendarDates, renderCalendarModalDates, sendRequestToDb} from "../../Logic/actions"

const mapStateToProps = state => {

  return {
    confirmDbEntry : state.modalReducer.confirmDbEntry
  };
};

const Container = connect(mapStateToProps, {getCalendarDates, renderCalendarModalDates, sendRequestToDb})(Presenter);

export default Container;
