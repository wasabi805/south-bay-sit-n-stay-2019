import React, { Component } from "react";
import PagePresenter from "./components/page/page-container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  render() {
    let testThis = "This should render";
    let coffeeIcon = <FontAwesomeIcon icon={faCoffee} />;

    return (
      <React.Fragment>
        <div className="hello">{testThis}</div>
        <PagePresenter coffeeIcon={coffeeIcon} />
      </React.Fragment>
    );
  }
}

export default App;
