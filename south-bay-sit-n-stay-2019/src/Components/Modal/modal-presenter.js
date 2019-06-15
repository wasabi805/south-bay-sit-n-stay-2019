import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

function getModalStyle() {
  //Modal content styles
  return {
    position: "relative",
    width: `80vw`,
    margin: "calc(13%) auto",
    backgroundColor: "#ffffff"
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none"
  }
}));

class SimpleModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalStyle: getModalStyle(),
      confirmMonthOne: ""
    };

    this.handleClose = this.handleClose.bind(this);
    this.classes = this.classes.bind(this);
    this.showConfirmDates = this.showConfirmDates.bind(this);
  }

  handleClose() {
    return this.props.closeModal;
  }

  //used for Material UI to style modal
  classes() {
    return useStyles;
  }

  // Method that Displays the dates the user selected from the calendar
  showConfirmDates() {
    //console.log(this.props) , [monthAsNum , [ range of dates]]
    let { months } = this.props;
    let showMonthOne = "",
      showMonthOneDays = "",
      showMonthTwo = "",
      showMonthTwoDays = "";
    let showMonthThree = "",
      showMonthThreeDays = "",
      showMonthFour = "",
      showMonthFourDays = "";

    if (months) {
      let thisYear = new Date().getFullYear();

      const getMonthNumber = n => months[n].name;
      const getMonthDays = n => months[n].days;
      const convertMonthNumberToEnglish = n =>
        new Date(thisYear, n - 1, 1).toLocaleString("en-us", { month: "long" });

      // if none of the calendar tiles were clicked and user hits button to display selected calendar dates ....
      if (months[0].name.length === 0 || months[0].name === "") {
        return "PLEASE START BY SELECTING A DATE";
      }
      //if dates in first month are selected...
      if (months[0].name) {
        // let mNum = months[0].name;
        let mNum = getMonthNumber(0);
        let mDays = getMonthDays(0);
        showMonthOne = convertMonthNumberToEnglish(mNum);
        showMonthOneDays = mDays;
      }

      if (months[1].name > 0) {
        let mNum = getMonthNumber(1);
        let mDays = getMonthDays(1);
        showMonthTwo = convertMonthNumberToEnglish(mNum);
        showMonthTwoDays = mDays;
      }

      if (months[2].name > 0) {
        let mNum = getMonthNumber(2);
        let mDays = getMonthDays(2);
        showMonthThree = convertMonthNumberToEnglish(mNum);
        showMonthThreeDays = mDays;
      }

      if (months[3].name > 0) {
        let mNum = getMonthNumber(3);
        let mDays = getMonthDays(3);
        showMonthFour = convertMonthNumberToEnglish(mNum);
        showMonthFourDays = mDays;
      }

      return (
        <React.Fragment>
          {showMonthOne} : {showMonthOneDays}
          {showMonthTwo} : {showMonthTwoDays}
          {showMonthThree} : {showMonthThreeDays}
          {showMonthFour} : {showMonthFourDays}
        </React.Fragment>
      );
    }
  }

  render() {
    //UnComment below for debugging
    // console.log(this.props, "FROM THE MODAL PRESENTER - BOOKING CONTAINER IS PASSING PROPS TO THIS COMP");

    return (
      <div>
        <Typography gutterBottom>if correct, click submit</Typography>

        <Button>Open Modal</Button>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.open}
          onClose={this.handleClose()}
        >
          <div style={this.state.modalStyle} className={this.classes.paper}>
            <Typography variant="h6" id="modal-title">
              Confirm The Dates
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              Please confirm the following dates you've selected are correct:
            </Typography>

            <Typography variant="body1" id="simple-modal-description">
              {/*Renders all the dates selected by the user from clicking calendar tiles*/}
              {this.showConfirmDates()}
            </Typography>
            <SimpleModal />
          </div>
        </Modal>
      </div>
    );
  }
}

export default SimpleModal;
