import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    margin: "auto",

    // marginBottom: "5%",
    padding: "1% 0 0% 0"
  },

  title: {
    textAlign: "center"
  },

  chip: {
    marginRight: theme.spacing(1)
  },
  section1: {
    margin: theme.spacing(1, 1)
  },
  section2: {
    margin: theme.spacing(2)
  },

  section2Title: {
    margin: theme.spacing(5),
    marginBottom: 0,
    // color: 'red',
    textAlign: "center"
  },

  section2TitleText: {
    marginBottom: 0
  },

  section3: {
    margin: theme.spacing(3, 1, 1)
  }
}));

export default function MiddleDividers(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            {/*find the style in services scss file*/}
            <ul className={"section-nav-links"}>
              <li style={{ display: "inline-block", margin: "0 3rem" }}>
                Benefits
              </li>
              <li style={{ display: "inline-block", margin: "0 3rem" }}>
                Services
              </li>
              <li style={{ display: "inline-block", margin: "0 3rem" }}>
                Questions
              </li>
            </ul>
            <Typography gutterBottom variant="h4" className={classes.title} />
          </Grid>
        </Grid>
      </div>
      <Divider variant="middle" />
      <div className={classes.section2Title}>
        <Typography variant="h1" className={classes.section2TitleText}>
          We Provide the Care
        </Typography>
        <div>
          <Typography color="textSecondary" variant={"body1"} />
        </div>

        {/*PUT THIS IN THE HERO WITH THE BTN
                     Here will be some general introduction to the services provided by South bay Sit N Stay. The details for the services are provided below.
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with: “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”

                */}
      </div>
    </div>
  );
}
