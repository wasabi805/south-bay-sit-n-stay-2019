import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import NavBarContainer from "./Components/NavBar/nav-bar-container";
import PagePresenter from "./components/page/page-container";
import Footer from "./Components/Footer/footer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App.js">
          <NavBarContainer />
          <PagePresenter />
          <Footer/>
        </div>
      </Provider>
    );
  }
}

export default App;
