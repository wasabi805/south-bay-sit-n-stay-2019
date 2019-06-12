import React, { Component } from "react";
import PropTypes from "prop-types";
import { styled } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import HeroPresenter from "../Hero/hero-presenter";
import CardsSection from "../Cards/card-section-component";
import BookingSection from "../Booking-Calendar/booking-container";
import GallerySection from "../Gallery/gallerySection";

class LandingPresenter extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.getLandingContext[0];
  }
  render() {
      console.log(this.props ,'FROM LANDING PRESENTER')



    const LandingPage = styled(Grid)({
      minWidth: "100vw",
      textAlign: "center"
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
          landingCards={this.props.getLandingContext[0].cards}
          landingCardsHeading={this.props.getCardSectionHeadings}
        />

        <BookingSection />
        <GallerySection />
      </LandingPage>
    );
  }
}

export default LandingPresenter;

LandingPresenter.propTypes = {
  className: PropTypes.string,
  getCardSectionHeadings: PropTypes.object.isRequired,
  getLandingContext: PropTypes.array.isRequired,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
};
