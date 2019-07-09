import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";

import PropTypes from "prop-types";
import Grow from "@material-ui/core/Grow";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import FaceIcon from "@material-ui/icons/Face";
import SmartPhoneIcon from "@material-ui/icons/Smartphone";
import EmailIcon from "@material-ui/icons/Email";
import LocationIcon from "@material-ui/icons/PinDrop";
import PawIcon from "@material-ui/icons/Pets";

const classes = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100vw"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "100%"
  },

  row: {
    display: "flex",
    position: "relative"
  },

  col: {
    display: "inline-block",
    // background: 'orange',
    verticalAlign: "bottom",
    border: "1px solid green"
  },

  text: {
    textOverflow: "ellipsis",
    overflow: "hidden"
  },

  comments: {
    width: "100vw"
  },

  chip: {
    margin: theme.spacing(1)
  }
}));

class ConfirmBook extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const classes = useStyles();
    let {
      contactFirstName,
      contactLastName,
      contactPhone,
      contactEmail,
      contactCity,
      dogName,
      dogBreed,
      dogAge,
      dogWeight,
      comments
    } = this.props.contactForm;

    return (
      <Grow in={this.props.showModal3}>
        <Grid
          container
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            background: "lime"
          }}
        >
          <Paper className={classes.paper}>
            {/*<Grid item xs={12} style={{border: "1px solid blue"}}>*/}
            {/*<List subheader={<ListSubheader>Confirm the following information is correct:</ListSubheader>} >*/}

            {/*</List>*/}
            {/*</Grid>*/}

            <Grid
              item
              xs={12}
              style={{ border: "1px solid purple", fontSize: "2rem" }}
            >
              <List subheader={<ListSubheader>Dates </ListSubheader>}>
                {this.props.renderDates.map(date => {
                  return (
                    <span key={"render-date" + date.month + "-" + date.days}>
                      {date.month} , {date.days}
                      <br />
                    </span>
                  );
                })}
              </List>
            </Grid>

            <Grid className={classes.row}>
              <Grid item xs={6} className={classes.col}>
                <List subheader={<ListSubheader>Contact Info </ListSubheader>}>
                  <ListItem>
                    <ListItemIcon>
                      <FaceIcon />
                    </ListItemIcon>
                    <ListItemText
                      id=""
                      primary={[contactFirstName + " ", contactLastName]}
                    />
                  </ListItem>
                </List>

                <ListItem>
                  <ListItemIcon>
                    <SmartPhoneIcon />
                  </ListItemIcon>
                  <ListItemText id="" primary={contactPhone} />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.text}
                    id=""
                    primary={contactEmail}
                  />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <LocationIcon />
                  </ListItemIcon>
                  <ListItemText id="" primary={contactCity} />
                </ListItem>
              </Grid>

              <Grid item xs={6} className={classes.col}>
                <List subheader={<ListSubheader>Dog Info </ListSubheader>}>
                  <ListItem>
                    <ListItemIcon>
                      <PawIcon />
                    </ListItemIcon>
                    <ListItemText id="" primary={dogName} />
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <PawIcon />
                    </ListItemIcon>
                    <ListItemText id="" primary={dogBreed} />
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <PawIcon />
                    </ListItemIcon>
                    <ListItemText id="" primary={dogAge + " yrs old"} />
                  </ListItem>

                  <ListItem>
                    <ListItemIcon>
                      <PawIcon />
                    </ListItemIcon>
                    <ListItemText
                      id="switch-list-label-wifi"
                      primary={dogWeight + " lbs"}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Paper>

          <Paper className={classes.comments}>
            <Grid>
              <List subheader={<ListSubheader>Comments </ListSubheader>} />
              <ListItem>{comments}</ListItem>
            </Grid>
          </Paper>
        </Grid>
      </Grow>
    );
  }
}

export default ConfirmBook;

ConfirmBook.propTypes = {
  //Boolean from parent that displays to confirm dates req and user info is correct before submitting
  showModal3: PropTypes.bool.isRequired,

  //Array of dates user clicked on calendar
  renderDates: PropTypes.array.isRequired,

  //parent state updated with info provided by user form
  contactForm: PropTypes.object.isRequired,

  //Updated Search Query
  contactCity: PropTypes.string
};
