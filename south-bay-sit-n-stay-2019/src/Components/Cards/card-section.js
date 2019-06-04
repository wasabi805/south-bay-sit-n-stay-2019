import React from "react";
import { styled } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

const CardSection = () => {
  return (
    //TODO: THis section needs to be a grid
    <section className="card-container">
      <Card>
        <CardHeader
          avatar={<Avatar aria-label="Recipe">D</Avatar>}
          title="Drop In Visits"
          subheader="We'll hold down the fort"
        />
      </Card>
    </section>
  );
};

export default CardSection;
