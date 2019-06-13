import React from "react";
import PropTypes from "prop-types";
import { styled } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import HeroPresenter from "../Hero/hero-presenter";
import CardsSection from "../Cards/card-section-component";
import BookingSection from "../Booking-Calendar/booking-container";
import GallerySection from "../Gallery/gallerySection";

const LandingPresenter = props => {
  const LandingPage = styled(Grid)({
    minWidth: "100vw",
    textAlign: "center"
  });

  return (
    <LandingPage className={""}>
      <HeroPresenter
        heroId={props.heroId}
        heroClassName={props.heroClassName}
        heroImg={props.heroImg}
        heroHeader={props.heroHeader}
        heroSubHeader={props.heroSubHeader}
        heroButtonOne={props.heroButtonOne}
        heroButtonTwo={props.heroButtonTwo}
      />

      <CardsSection
        body_01={props.body_01}

        // landingCardsHeading={this.props.getCardSectionHeadings}
      />

      <BookingSection />
      <GallerySection />
    </LandingPage>
  );
};

export default LandingPresenter;

LandingPresenter.propTypes = {
  heroId: PropTypes.string,
  heroClassName: PropTypes.string,
  heroImg: PropTypes.string.isRequired,
  heroHeader: PropTypes.string.isRequired,
  heroSubHeader: PropTypes.string.isRequired,
  heroButtonOne: PropTypes.string.isRequired,
  heroButtonTwo: PropTypes.string.isRequired,

  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
};
