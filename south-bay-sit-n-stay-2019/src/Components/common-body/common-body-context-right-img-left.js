import React from "react";
import { withStyles } from "@material-ui/styles";

import Grid from "@material-ui/core/Grid";

const styles = {
  container: {
    position: "relative",
    // backgroundImage: `url("paper.gif")`,
    padding: "2rem",
    maxWidth: "75%",
    margin: "auto",
    marginBottom: "5%"
  },

  context: {
    display: "inline-block"
  },

  image: {
    display: "inline-block"
  }
};

const CommonBodyContextRightImgLeft = props => {
  const { classes, context } = props;

  return (
    <Grid container className={`${classes.container} ${context.wrapperColor}`}>
      <Grid item xs={6} className={classes.context}>
        <div
          style={{
            position: "absolute",
            top: "17%",
            color: "white",
            background: "#7300ffa8",
            marginRight: "41%",
            padding: "2%",
            zIndex: 1
          }}
        >
          <h2 className={`${context.headerClass} cbc-lft-and-rt-header`}>
            {context.header}
          </h2>

          <p className={`${context.contextClass} cbc-lft-and-rt-text`}>
            {context.context}
          </p>
        </div>
      </Grid>

      <Grid item xs={6} className={classes.image}>
        <img className={context.imageClass} src={context.image} alt={""} />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(CommonBodyContextRightImgLeft);
