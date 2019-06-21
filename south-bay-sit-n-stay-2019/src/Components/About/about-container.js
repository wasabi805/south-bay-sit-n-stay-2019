import { connect } from "react-redux";

import Presenter from "./about-presenter";

const mapStateToProps = state => {
  let { hero } = state.aboutReducer;
  return {
    hero: hero
  };
};

const Container = connect(mapStateToProps)(Presenter);

export default Container;
