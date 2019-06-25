import React, { Component } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import Grow from "@material-ui/core/Grow";

import BookForm from "../Forms/book-form";

//MODAL
const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[200]
  },

  showDates: {
    backgroundColor: "lime"
  },

  next_01_btn: {
    background: "blue"
  },

  chip: {
    margin: theme.spacing(1)
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;

  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    background: "pink"
  }
}))(MuiDialogActions);

class CalendarModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Dialog open={this.props.open} onClose={this.props.onClose}>
        <DialogTitle id="customized-dialog-title" onClose={this.props.onClose}>
          Your Requested Dates
        </DialogTitle>

        <DialogContent
          dividers
          style={{
            position: "relative",
            background: "aliceblue",
            minWidth: "30vw",
            minHeight: "20vh",
            padding: 0
          }}
        >
          <Grow in={this.props.showModal1}>
            <div
              style={{
                position: "absolute",
                border: "1px solid red",
                display: "inline-block",
                width: "100%",
                left: 0,
                right: 0,
                margin: "0 auto"
              }}
            >
              <Typography gutterBottom>
                Here are the dates you've selected
              </Typography>
              <Typography gutterBottom>
                {this.props.renderDates.map(date => {
                  return (
                    <Box>
                      <Chip
                        avatar={<Avatar>MB</Avatar>}
                        label={date.month + date.days}
                        className={styles.chip}
                      />
                    </Box>
                  );
                })}
              </Typography>

              <Typography gutterBottom>
                We'll just need some additional information before we can book,
                click next
              </Typography>
            </div>
          </Grow>

          <BookForm
            showModal2={this.props.showModal2}
            contactForm={this.props.contactForm}
            handleFormFieldChange={this.props.handleFormFieldChange}
          />
        </DialogContent>

        {/*MODAL BTNS*/}

        <DialogActions ref={this.props.modalName}>
          {this.props.backBtnId ? (
            <Button
              id={this.props.backBtnId}
              onClick={e => this.props.handleBack(e)}
              color="primary"
            >
              Back
            </Button>
          ) : null}

          <Button
            id={this.props.nextBtnId}
            onClick={e => this.props.handleNext(e)}
          >
            Next
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default CalendarModal;
