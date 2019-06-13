import { connect } from "react-redux";

import Presenter from "./landing-presenter";

const mapStateToProps = state => {
  let { hero, body_01 } = state.landingReducer;

  return {
    getLandingContext: "FOO",
    getCardSectionHeadings: "BAR",

    heroId: hero.id,
    heroClassName: hero.heroClassName,
    heroImg: hero.heroImg,
    heroHeader: hero.header,
    heroSubHeader: hero.heroSubHeader,
    heroButtonOne: hero.heroButtonOne,
    heroButtonTwo: hero.heroButtonTwo,

    body_01: body_01
  };
};

const Container = connect(mapStateToProps)(Presenter);

export default Container;
