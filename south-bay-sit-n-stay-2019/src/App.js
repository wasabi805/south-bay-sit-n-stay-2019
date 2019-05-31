import React, { Component } from "react";
import NavBarPresenter from "./Components/NavBar/nav-bar-presenter";
import PagePresenter from "./components/page/page-container";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarPresenter />
        <PagePresenter />
      </React.Fragment>
    );
  }
}

export default App;
