import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

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
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  console.log(props, "WHAT ARE THE PROPS HERE?");

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
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

class CalendarModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.onClose);

    return (
      <React.Fragment>
        hello
        <Dialog open={this.props.open} onClose={this.props.onClose}>
          <DialogTitle
            id="customized-dialog-title"
            onClose={this.props.onClose}
          >
            Your Requested Dates
          </DialogTitle>

          <DialogContent dividers>
            <Typography gutterBottom>
              Here are the dates you've selected
            </Typography>
            <Typography gutterBottom>
              {this.props.renderDates.map(date => {
                console.log(date);
                return (
                  <React.Fragment>
                    <span>
                      {date.month}, {date.days}
                    </span>
                    <br />
                  </React.Fragment>
                );
              })}
            </Typography>
            <Typography gutterBottom>
              We'll just need some additional information before we can book,
              click next
            </Typography>
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              NEXT
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default CalendarModal;
