import { connect } from "react-redux";

import Presenter from "./modal-presenter";
import { confirmCalendarDates } from "../../Logic/actions";

const mapStateToProps = state => {
  return {};
};

const Container = connect(
  mapStateToProps,
  { confirmCalendarDates }
)(Presenter);

export default Container;
