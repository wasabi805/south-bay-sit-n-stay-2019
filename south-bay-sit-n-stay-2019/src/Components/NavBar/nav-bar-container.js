import { connect } from "react-redux";

import Presenter from "./nav-bar-presenter";
import * as Selectors from "../../Logic/selectors";

const mapStateToProps = state => ({
  nav_names: Selectors.getNavNames(state)
});

const Container = connect(mapStateToProps)(Presenter);

export default Container;
