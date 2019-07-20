import { connect } from "react-redux";
import Presenter from "./services-presenter";

const mapStateToProps = state => {
  let { hero, body_02 } = state.servicesReducer;
  return {
    heroContext: hero,
    body_02: body_02
  };
};

const Container = connect(mapStateToProps)(Presenter);

export default Container;
