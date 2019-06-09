import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import NavBarContainer from "./Components/NavBar/nav-bar-container";
import LandingContainer from "./Components/Landing/landing-container";
import AboutContainer from "./Components/About/about-container";
import Footer from "./Components/Footer/footer";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  render() {

    return (
      <Router>
        <Switch>
          <Provider store={store}>
            <div className="App.js">
              <NavBarContainer />
              <Route exact path="/" component={LandingContainer} />
              <Route path="/about" component={AboutContainer} />
              <Footer />
            </div>
          </Provider>
        </Switch>
      </Router>
    );
  }
}

export default App;
