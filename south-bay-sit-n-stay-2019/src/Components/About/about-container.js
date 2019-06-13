import { connect } from "react-redux";

import Presenter from "./about-presenter";
import * as Selectors from "../../Logic/selectors";

const mapStateToProps = state => ({
  getAboutContext: Selectors.getAboutContext(state)
});

const Container = connect(mapStateToProps)(Presenter);

export default Container;
