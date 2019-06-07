import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import NavBarContainer from "./Components/NavBar/nav-bar-container";
import LandingContainer from "./Components/Landing/landing-container";
import About from "./Components/About/about-presenter";
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
              <Route path="/about" component={About} />
              <Footer />
            </div>
          </Provider>
        </Switch>
      </Router>
    );
  }
}

export default App;
