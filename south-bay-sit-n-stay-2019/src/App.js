import React from "react";
import NavBarContainer from "./Components/NavBar/nav-bar-container";
import LandingContainer from "./Components/Landing/landing-container";
import AboutContainer from "./Components/About/about-container";
import Footer from "./Components/Footer/footer";
import { Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

const App = () => {
  return (
    <div>
      <NavBarContainer />
      <Route exact path="/" render={props => <LandingContainer />} />
      <Route path="/about" component={AboutContainer} />

      <Footer />
    </div>
  );
};

export default App;
