import React, { Component } from "react";

import HeroPresenter from "../../Components/Hero/hero-presenter";
import CommonBodyImgLeftContextRight from "../common-body/common-body-img-left-context-right";
import CommonBodyContextRightImgLeft from "../common-body/common-body-context-right-img-left";
// import {DogAndBall , DogFood , DogMedicine} from '../SVG/all-svgs'

import MiddleDividers from "../common/middle-dividers";
import CardsNoBG from "../common/cards-no-bg";

class ServicesPresenter extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let { body_02 } = this.props;

    return (
      <div id={"services"}>
        <HeroPresenter heroContext={this.props.heroContext} />

        <MiddleDividers />
        <CardsNoBG />

        <CommonBodyContextRightImgLeft context={body_02.context.one} />
        <CommonBodyImgLeftContextRight context={body_02.context.two} />
        <CommonBodyContextRightImgLeft context={body_02.context.three} />
      </div>
    );
  }
}

export default ServicesPresenter;
