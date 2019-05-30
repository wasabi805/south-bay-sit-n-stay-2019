import React, { Component } from "react";
import PagePresenter from "./components/page/page-container";

class App extends Component {
  render() {
    let testThis = "This should render";
    return (
      <React.Fragment>
        <div className="hello">{testThis}</div>
        <PagePresenter />
      </React.Fragment>
    );
  }
}

export default App;
