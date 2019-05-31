import React, { Component } from "react";
import { styled } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import HeroPresenter from "../../Hero/hero-presenter";

class LandingPresenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroImg:
        "url('https://sb-sit-2019.s3.amazonaws.com/zoe-ra-43393-cropped-2560X1440.jpg')",
      heroHeader: "We have you and your pet covered",
      heroSubHeader:
        "Have us for drop in visits, schedule boarding when you're away, or have us sit for you.",
      //className for hero elements
      landingPage: "landing-page",
      heroClassName: "landing-hero-container",
      heroContext: "landing-hero-context",
      heroButtons: "landing-hero-buttons",
      heroButtonOne: "Get Started",
      heroButtonTwo: "About US"
    };
  }

  render() {
    const LandingPage = styled(Grid)({
      minWidth: "100vw"
    });

    let { landingPage, heroPresenter } = this.state;

    return (
      <LandingPage className={`${landingPage}`}>
        {/*TODO Pass the Props to HeroPresenter as an object and unpack it before the return @ hero-Presenter*/}
        <HeroPresenter
          heroClassName={this.state.heroClassName}
          heroContext={this.state.heroContext}
          heroButtons={this.state.heroButtons}
          heroImg={this.state.heroImg}
          heroHeader={this.state.heroHeader}
          heroSubHeader={this.state.heroSubHeader}
          heroButtonOne={this.state.heroButtonOne}
          heroButtonTwo={this.state.heroButtonTwo}
        />
      </LandingPage>
    );
  }
}

export default LandingPresenter;
