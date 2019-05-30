import React from "react";
import PageStyle from "../../assets/style/components/page.scss";
import Button from "@material-ui/core/Button";

const PageContainer = props => {
  return (
    <div className={PageStyle.page}>
      <h1 className="header">This is the page container </h1>

      <p>React Component : A Material Design button below</p>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      {props.coffeeIcon}
    </div>
  );
};

export default PageContainer;
