import React from "react";
import PropTypes from "prop-types";
import HeroPresenter from "../../Components/Hero/hero-presenter";
import CommonBodyContainer01 from "../../Components/common-body/common-body-container-01";

const AboutPresenter = props => {
  let aboutHero = props.getAboutContext[0];

  return (
    <div>
      <HeroPresenter
        heroImg={aboutHero.heroImg}
        heroHeaderBOne={aboutHero.heroHeaderBOne}
        heroHeaderBTwo={aboutHero.heroHeaderBTwo}
        heroSubHeaderB={aboutHero.heroSubHeaderB}
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
