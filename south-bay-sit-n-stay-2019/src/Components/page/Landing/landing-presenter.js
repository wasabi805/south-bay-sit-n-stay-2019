import React, { Component } from "react";
import { styled } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import HeroPresenter from "../../Hero/hero-presenter";
import CardsSection from "../../Cards/card-section-component";
import BookingSection from "../../Booking-Calendar/booking-presenter"

class LandingPresenter extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.getLandingContext[0];
  }
  render() {
    const LandingPage = styled(Grid)({
      minWidth: "100vw"
    });

    let { landingPage } = this.state;

    return (
      <LandingPage className={`${landingPage}`}>
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

        <CardsSection
          landingCards={this.props.getLandingContext[1]}
          landingCardsHeading={this.props.getCardSectionHeadings}
        />

        <BookingSection/>
      </LandingPage>
    );
  }
}

export default LandingPresenter;
