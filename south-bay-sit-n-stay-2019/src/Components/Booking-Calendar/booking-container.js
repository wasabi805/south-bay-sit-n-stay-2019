import { connect } from "react-redux";
import Presenter from "./booking-presenter";
import {getCalendarDates, renderCalendarModalDates, sendRequestToDb} from "../../Logic/actions"

const mapStateToProps = state => {
  return {
  };
};

const Container = connect(mapStateToProps, {getCalendarDates, renderCalendarModalDates, sendRequestToDb})(Presenter);

export default Container;
