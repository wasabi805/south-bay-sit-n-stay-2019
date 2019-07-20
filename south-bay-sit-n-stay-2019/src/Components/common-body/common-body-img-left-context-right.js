import React from "react";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";

const styles = {
  container: {
    position: "relative",
    padding: "2rem",

    maxWidth: "80%",
    margin: "auto",
    marginBottom: "5%"
  },

  image: {
    "& img": {
      width: "100%"
    }
  },

  context: {}
};

const CommonBodyContextRightImgLeft = props => {
  const { classes, context } = props;

  return (
    <Grid container className={classes.container}>
      <Grid item xs={6} className={classes.image}>
        <img className={context.imageClass} src={context.image} alt={""} />
      </Grid>

      <Grid item xs={6} className={classes.context}>
        <div
          style={{
            position: "absolute",
            top: "17%",
            marginLeft: "-10%",
            marginRight: "2%",
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
    </Grid>
  );
};

export default withStyles(styles)(CommonBodyContextRightImgLeft);
