import React from "react";
import LandingContainer from "../Landing/landing-container";
import { useTheme } from "@material-ui/styles";

const PageContainer = props => {
  return (
    <div className="page">
      <LandingContainer />
    </div>
  );
};

export default PageContainer;
