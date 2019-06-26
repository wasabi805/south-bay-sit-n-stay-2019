import { connect } from "react-redux";

import Presenter from "./landing-presenter";

const mapStateToProps = state => {
  let { hero, body_01 } = state.landingReducer;

  return {
    body_01: body_01,
    heroContext: hero
  };
};

const Container = connect(mapStateToProps)(Presenter);

export default Container;
