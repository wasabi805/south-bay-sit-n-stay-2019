import { connect } from "react-redux";
import Presenter from "./nav-bar-presenter";

const mapStateToProps = state => {
  let { nav_names } = state.navigationReducer;
  return {
    nav_names: nav_names
  };
};

const Container = connect(mapStateToProps)(Presenter);

export default Container;
