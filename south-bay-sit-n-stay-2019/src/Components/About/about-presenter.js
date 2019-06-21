import React from "react";
import PropTypes from "prop-types";
import HeroPresenter from "../../Components/Hero/hero-presenter";
import CommonBodyContainer01 from "../../Components/common-body/common-body-container-01";

const AboutPresenter = props => {
  return (
    <div>
      <HeroPresenter
        heroImg={props.hero.heroImg}
        heroHeaderBOne={props.hero.heroHeaderBOne}
        heroHeaderBTwo={props.hero.heroHeaderBTwo}
        heroSubHeaderB={props.hero.heroSubHeaderB}
      />

      <CommonBodyContainer01 myProps={"the props coming from about"} />
    </div>
  );
};

export default AboutPresenter;

AboutPresenter.propTypes = {
  getAboutContext: PropTypes.array.isRequired,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
};
