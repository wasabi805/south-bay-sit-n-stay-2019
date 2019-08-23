import React, { Component } from "react";

import HeroPresenter from "../../Components/Hero/hero-presenter";
import CommonBodyImgLeftContextRight from "../common-body/common-body-img-left-context-right";
import CommonBodyContextRightImgLeft from "../common-body/common-body-context-right-img-left";
// import {DogAndBall , DogFood , DogMedicine} from '../SVG/all-svgs'

import MiddleDividers from "../common/middle-dividers";
import CardsNoBG from "../common/cards-no-bg";
import HeaderAndButtonsOnly from "../common/header-and-buttons-only";
import ServiceQuestions from "./service-questions";
import Box from "@material-ui/core/Box";
import { styled } from "@material-ui/styles";

const ParallaxWrapper = styled(Box)({
  position: "relative",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  background:
    " url('https://i.ibb.co/VYQNDLW/davide-ragusa-a-Ri-G2-Nx-EFMk-unsplash.jpg')",
  backgroundAttachment: "fixed",
  zIndex: 0,
  height: "auto",

  "&:after": {
    content: " ' ' ",
    position: "absolute",
    zIndex: 0,
    top: 0,
    left: 0,
    bottom: 0,
    width: "calc(100%)",
    background: "#0000008f"
  }
});

class ServicesPresenter extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let { body_02, body_03 } = this.props;

    return (
      <div id={"services"}>
        <HeroPresenter heroContext={this.props.heroContext} />

        <MiddleDividers />
        <CardsNoBG />

        <ParallaxWrapper>
          <CommonBodyImgLeftContextRight
            context={body_02.context.one}
            circleImg={body_02.context.one.image}
          />
          <CommonBodyImgLeftContextRight
            context={body_02.context.two}
            circleImg={body_02.context.two.image}
          />
          <CommonBodyImgLeftContextRight
            context={body_02.context.three}
            circleImg={body_02.context.three.image}
          />
        </ParallaxWrapper>
        <HeaderAndButtonsOnly context={body_03.context} />

        <ServiceQuestions />
      </div>
    );
  }
}

export default ServicesPresenter;
