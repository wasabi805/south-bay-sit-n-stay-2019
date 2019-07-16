import { connect } from "react-redux";

import Presenter from "./calendar-presenter";
import {
  getCalendarDates,
  renderCalendarModalDates
} from "../../Logic/actions/calendar-actions";

const mapStateToProps = state => {
  return {
    testMe: "This is a dummy test . We go Dumb"
  };
};

const Container = connect(
  mapStateToProps,
  { getCalendarDates: getCalendarDates, renderCalendarModalDates }
)(Presenter);

export default Container;
