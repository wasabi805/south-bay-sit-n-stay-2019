import React from "react";
import Grow from "@material-ui/core/Grow";

const Spinner = props => {
  const isPosting = props.isPosting;
  return (
    <Grow in={isPosting}>
      <div id={"spinner"}>
        <div className="loader" />
        <p className={"sending"}> Sending...</p>
      </div>
    </Grow>
  );
};

export default Spinner;
