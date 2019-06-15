import { connect } from "react-redux";

import Presenter from "./calendar-presenter";
import {
  confirmCalendarDates,
  renderCalendarModalDates
} from "../../Logic/actions";

const mapStateToProps = state => {
  return {
    testMe: "This is a dummy test . We go Dumb"
  };
};

const Container = connect(
  mapStateToProps,
  { confirmCalendarDates, renderCalendarModalDates }
)(Presenter);

export default Container;
