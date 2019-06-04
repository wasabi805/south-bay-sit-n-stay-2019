import { connect } from "react-redux";

import Presenter from "./landing-presenter";
import * as Selectors from "../../../Logic/selectors";

const mapStateToProps = state => ({
  getLandingContext: Selectors.getLandingContext(state)
});

const Container = connect(mapStateToProps)(Presenter);

export default Container;
