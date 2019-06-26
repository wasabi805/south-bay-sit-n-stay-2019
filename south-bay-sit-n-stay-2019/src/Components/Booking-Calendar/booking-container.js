import { connect } from "react-redux";
import Presenter from "./booking-presenter";
import {getCalendarDates, renderCalendarModalDates} from "../../Logic/actions"

const mapStateToProps = state => {
  return {
  };
};

const Container = connect(mapStateToProps, {getCalendarDates, renderCalendarModalDates})(Presenter);

export default Container;
