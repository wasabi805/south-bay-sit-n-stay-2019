import React from "react";
import NavBarContainer from "./Components/NavBar/nav-bar-container";
import LandingContainer from "./Components/Landing/landing-container";
import AboutContainer from "./Components/About/about-container";
import Footer from "./Components/Footer/footer";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBarContainer />
      <Route exact path="/" component={LandingContainer} />
      <Route path="/about" component={AboutContainer} />
      <Footer />
    </div>
  );
};

export default App;
