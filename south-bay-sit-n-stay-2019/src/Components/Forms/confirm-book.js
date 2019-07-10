import React from "react";
import { makeStyles , useStyles} from "@material-ui/core/styles";


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


const ConfirmBook =(props)=> {
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

    return (
        <Grow in={props.showModal3}>
          <Grid
              container
              style={{
                position: "absolute",
                top: 0,
                width: "100%",
                background: "alice blue"
              }}
          >
            <div style={{width: "100%"}}>
              {/*<Grid item xs={12} style={{border: "1px solid blue"}}>*/}
              {/*<List subheader={<ListSubheader>Confirm the following information is correct:</ListSubheader>} >*/}

              {/*</List>*/}
              {/*</Grid>*/}

              {/* ------  ----- ----- CONTAINER ----- ----- ----- */}
              <Grid item xs={12} style={{ border: "1px solid purple", fontSize: "2rem" }}>


                {/* ------  ----- ----- R1 : Date ----- ----- ----- */}
                <div style={{
                  position: "relative",
                  textAlign: "center",
                }}>

                  <h1>DATES</h1>
                  {props.renderDates.map(date => {
                    return (
                        <span key={"render-date" + date.month + "-" + date.days}
                              style={{textAlign: "center", display: "inherit"}}
                        >
                      {date.month} , {date.days}
                          <br />
                    </span>
                    );
                  })}
                </div>

                {/* ------  ----- ----- R2 : User & Dog InFo ----- ----- ----- */}
                <div className={'row'}>
                  <div className={'col'}>
                    <Grid
                        // className={classes.row}
                    >
                      <Grid item xs={6}
                            // className={classes.col}
                      >
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
                              // className={classes.text}
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


                    </Grid>
                  </div>
                  <div className={'col'}>
                    <Grid item xs={6}
                          // className={classes.col}
                    >
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
                  </div>
                </div>


                {/* ------  ----- ----- R3 : Comments ----- ----- ----- */}
                <div className={'row'}>
                  <div style={{minHeight: "15rem"}}>
                    <h3>Comments</h3>
                    <p>{comments}</p>
                  </div>
                </div>

              </Grid>
              {/* ------  ----- ----- END CONTAINER ----- ----- ----- */}

            </div>


          </Grid>
        </Grow>
    )

};

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
