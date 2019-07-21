import React from "react";
import { withStyles } from "@material-ui/styles";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography"

const styles = {
  container: {
    position: "relative",
    padding: "2rem",

    maxWidth: "80%",
    margin: "auto",
    marginBottom: "5%"
  },

  context: {},

  image: {
    "& img": {
      width: "100%"
    }
  },

  text: {
      position: "absolute",
      top: "17%",
      marginLeft: "-10%",
      marginRight: "2%",
      padding: "2%",
      zIndex: 1
  }
};

const CommonBodyContextRightImgLeft = props => {
  const { classes, context } = props;

  return (
    <Grid container className={classes.container}>
      <Grid item xs={6} className={classes.image}>
        <img className={context.imageClass} src={context.image} alt={""} />
      </Grid>

      <Grid item xs={6} className={classes.context}>
        <Box className={classes.text}>

          <Typography variant={"h2"}>{context.header}</Typography>
          {/*<h2 className={`${context.headerClass} cbc-lft-and-rt-header`}>*/}
          {/*{context.header}*/}
          {/*</h2>*/}

            {console.log(context.contextClass, 'context.contextClass')}
          <Typography variant={'body2'} className={`${context.contextClass} cbc-lft-and-rt-text`}>
            {context.context}
          </Typography>

        </Box>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(CommonBodyContextRightImgLeft);
