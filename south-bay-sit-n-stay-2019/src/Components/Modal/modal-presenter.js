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
    this.convertDateM1 = this.convertDateM1.bind(this);
    this.convertDateM2 = this.convertDateM2.bind(this);
  }

  handleClose() {
    return this.props.closeModal;
  }

  classes() {
    return useStyles;
  }

  convertDateM1(month) {
    if (month === undefined) {
      return "Please Start by selecting a date.";
    }

    if (month) {
      return (
        <p>
          {new Date(1900, month - 1, 1).toLocaleString("en-us", {
            month: "long"
          })}
          {"  " + this.props.firstMonthDays + "," + "  "}
        </p>
      );
    } else {
      return "";
    }
  }

  convertDateM2(month) {
    console.log(this.props);

    if (month) {
      return (
        <p>
          {new Date(1900, month - 1, 1).toLocaleString("en-us", {
            month: "long"
          })}
          {"  " + this.props.secondMonthDays + "," + "  "}
        </p>
      );
    } else {
      return "";
    }
  }

  render() {
    console.log(this.props, "THEY BETTER BE IN HERE");

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
              {this.convertDateM1(this.props.firstMonth)}
              {this.convertDateM2(this.props.secondMonth)}
            </Typography>
            <SimpleModal />
          </div>
        </Modal>
      </div>
    );
  }
}

export default SimpleModal;
