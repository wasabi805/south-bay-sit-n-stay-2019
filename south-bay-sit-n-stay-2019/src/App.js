import React from "react";
import NavBarContainer from "./Components/NavBar/nav-bar-container";
import LandingContainer from "./Components/Landing/landing-container";
import AboutContainer from "./Components/About/about-container";
import ServicesContainer from "./Components/Services/services-container";
import Footer from "./Components/Footer/footer";
import { BrowserRouter as Router,  Route,  Link,  Switch,  Redirect, NavLink } from "react-router-dom";


const App = (props) => {
  return (


          <div>
              <NavBarContainer />

              <Route exact path="/" render={props => <LandingContainer />} />


              <Route path="/about" component={AboutContainer} />
              <Route path="/services" component={ServicesContainer} />


              <Footer />
          </div>



  );
};






export default App;
