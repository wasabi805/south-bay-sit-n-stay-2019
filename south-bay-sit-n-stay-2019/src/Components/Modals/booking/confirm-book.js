import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/styles";

import Box from "@material-ui/core/Box";

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

import { capitalizeString } from "../../../../utils/CapitalizeString";

const styles = {
  root: {
    position: "absolute",
    width: "95%",
    top: "3%",
    background: "alice blue",
    fontSize: "2rem"
  }
};

const ConfirmInfoText = styled(ListItemText)({
  // border: "1px solid red"
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
});

const ListIconWrapper = styled(ListItemIcon)({
  color: "rgb(129, 32, 129)"
});

const ConfirmBook = props => {
  const { classes, requestedServiceType } = props;

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
  } = props.contactForm;

  const getSvcName = () => {
    let svcName = requestedServiceType.split("-book-modal-icon")[0];
    return capitalizeString(svcName);
  };

  return (
    <Grow in={props.showModal3}>
      {/* ------  ----- ----- CONTAINER ----- ----- ----- */}
      <div id={"confirm-book-container"} className={classes.root}>
        {/* ------  ----- ----- R1 : Date ----- ----- ----- */}
        <Paper
          style={{
            position: "relative",
            textAlign: "center",
            padding: "2rem 0",
            marginBottom: "0.5rem"
          }}
        >
          <h5>Request for {getSvcName()} services on: </h5>

          {props.renderDates.map(date => {
            let confirmDates = [];
            let setOfDates = Object.values(date); //array of selected dates as: [0] = month [1]= days array

            for (var i = 0; i < setOfDates[1].length; i++) {
              // console.log( date.month,   x[1][i] , "in the loop")
              confirmDates.push(
                <li
                  style={{ listStyle: "none" }}
                  key={"render-date" + date.month + "-" + date.days}
                >
                  {date.month} {setOfDates[1][i]}
                </li>
              );
            }

            return (
              <ul className={'confirm-months'} key={`confirm-${date.month}`} >
                {confirmDates}
              </ul>
            );
          })}
        </Paper>

        {/* ------  ----- ----- R2 : User & Dog InFo ----- ----- ----- */}
        <Paper>
          <div className={"row"}>
            <div className={"col"}>
              <Grid>
                <Grid item xs={10} sm={12}>
                  <List
                    subheader={<ListSubheader>Contact Info </ListSubheader>}
                  >
                    <ListItem>
                      <ListIconWrapper>
                        <FaceIcon />
                      </ListIconWrapper>

                      <ConfirmInfoText
                        id="confirm-contact-first-name"
                        primary={[contactFirstName + " ", contactLastName]}
                      />
                    </ListItem>
                  </List>

                  <ListItem>
                    <ListIconWrapper>
                      <SmartPhoneIcon />
                    </ListIconWrapper>
                    <ListItemText id="" primary={contactPhone} />
                  </ListItem>

                  <ListItem>
                    <ListIconWrapper>
                      <EmailIcon />
                    </ListIconWrapper>
                    <ConfirmInfoText id="" primary={contactEmail} />
                  </ListItem>

                  <ListItem>
                    <ListIconWrapper>
                      <LocationIcon />
                    </ListIconWrapper>
                    <ListItemText id="" primary={contactCity} />
                  </ListItem>
                </Grid>
              </Grid>
            </div>
            <div className={"col"}>
              <Grid item xs={12}>
                <List subheader={<ListSubheader>Dog Info </ListSubheader>}>
                  <ListItem>
                    <ListIconWrapper>
                      <PawIcon />
                    </ListIconWrapper>
                    <ListItemText
                      id="dog-name"
                      placeholder={"A girl has no name"}
                      primary={dogName}

                      // to change color of text ....
                      // disableTypography
                      //           primary={<Typography type="body2" style={{ color: 'red' }}>MyTitle</Typography>}
                    />
                  </ListItem>

                  <ListItem>
                    <ListIconWrapper>
                      <PawIcon />
                    </ListIconWrapper>
                    <ListItemText
                      id="dog-breed"
                      placeholder={"A dog has no age"}
                      primary={dogBreed}
                    />
                  </ListItem>

                  <ListItem>
                    <ListIconWrapper>
                      <PawIcon />
                    </ListIconWrapper>
                    <ListItemText
                      id="dog-age"
                      placeholder={"A dog has no age"}
                      primary={dogAge + " yrs old"}
                    />
                  </ListItem>

                  <ListItem>
                    <ListIconWrapper>
                      <PawIcon />
                    </ListIconWrapper>
                    <ListItemText
                      id="switch-list-label-wifi"
                      placeholder={"A dog has no weight"}
                      primary={dogWeight + " lbs"}
                    />
                  </ListItem>
                </List>
              </Grid>
            </div>
          </div>
        </Paper>

        {/*THIS IS HERE IN CASE I DECIDE TO ADD THE USER COMMENTS FOR SUBMIT VERIFICATION LATER DOWN THE ROAD   */}

        {/* ------  ----- ----- R3 : Comments ----- ----- ----- */}
        {/*<div className={'row'}>*/}
        {/*<Paper>*/}
        {/*<h3>Comments</h3>*/}
        {/*<div style={{*/}
        {/*background : "blue" ,*/}
        {/*maxHeight: "9rem" ,*/}
        {/*// overflow: "scroll"*/}
        {/*}} >*/}
        {/*<p>{comments}</p>*/}
        {/*</div>*/}

        {/*</Paper>*/}
        {/*</div>*/}

        {/*</Paper>*/}
        {/* ------  ----- ----- END CONTAINER ----- ----- ----- */}
      </div>
    </Grow>
  );
};

export default withStyles(styles)(ConfirmBook);

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
