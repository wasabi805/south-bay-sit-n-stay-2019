import { connect } from "react-redux";

import Presenter from "./booking-presenter";
import * as Selectors from "../../Logic/selectors";
import { getRequestedDates } from "../../Logic/actions";

const mapStateToProps = state => ({
  testMe: "This is a dummy test . We go Dumb",
  setCalendarDates: state.Logic
});

const Container = connect(
  mapStateToProps,
  { getRequestedDates }
)(Presenter);

export default Container;
