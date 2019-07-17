import React, { Component } from "react";
import PropTypes from "prop-types";
import HeroPresenter from "../../Components/Hero/hero-presenter";
import CommonBodyContainer01 from "../../Components/common-body/common-body-container-01";
import { styled } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

import CardsSection from "../../Components/Cards/card-section-component";

class AboutPresenter extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const AboutPage = styled(Grid)({
      minWidth: "100vw",
      textAlign: "center"
    });

    return (
      <AboutPage id={"about"}>
        <HeroPresenter heroContext={this.props.heroContext} />

        <CommonBodyContainer01
          myProps={"the props coming from about"}
          body_01={this.props.body_01}
        />
        <CardsSection
          className={"about-employee-cards"}
          body_01={this.props.body_02}
        />
      </AboutPage>
    );
  }
}

export default AboutPresenter;

AboutPresenter.propTypes = {
  // getAboutContext: PropTypes.array.isRequired,
  // history: PropTypes.object,
  // location: PropTypes.object,
  // match: PropTypes.object
};
