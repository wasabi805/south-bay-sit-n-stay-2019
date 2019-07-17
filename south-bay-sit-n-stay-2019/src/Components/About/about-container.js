import { connect } from "react-redux";

import Presenter from "./about-presenter";

const mapStateToProps = state => {
  let { hero, body_02, body_01 } = state.aboutReducer;
  return {
    heroContext: hero,
    body_01: body_01,
    body_02: body_02
  };
};

const Container = connect(mapStateToProps)(Presenter);

export default Container;
