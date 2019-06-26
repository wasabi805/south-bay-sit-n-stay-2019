import React from "react";
import { withStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
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
import ConfirmBook from "../Forms/confirm-book";

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
    padding: theme.spacing(2),
    background: "pink"
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
    // background: "pink"
  }
}))(MuiDialogActions);

const CalendarModal = withStyles(styles)(props => {
  const { classes, modalView, btnView } = props;

  return (
    <Dialog maxWidth={"md"} open={props.open} onClose={props.onClose}>
      <DialogTitle id="customized-dialog-title" onClose={props.onClose}>
        Your Requested Dates
      </DialogTitle>

      <DialogContent
        dividers
        style={{
          position: "relative",
          background: "aliceblue",
          minWidth: "30vw",
          minHeight: "55vh",
          padding: 0
        }}
      >
        <Grow in={modalView.showModal1}>
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
            <Box>
              {props.renderDates.map((date, index) => {
                return (
                  <Chip
                    key={date.month + "-" + index}
                    avatar={<Avatar>MB</Avatar>}
                    label={date.month + date.days}
                    className={styles.chip}
                  />
                );
              })}
            </Box>

            <Typography gutterBottom>
              We'll just need some additional information before we can book,
              click next
            </Typography>
          </div>
        </Grow>

        <BookForm
          showModal2={modalView.showModal2}
          contactForm={props.contactForm}
          handleFormFieldChange={props.handleFormFieldChange}
        />

        <ConfirmBook
          showModal3={modalView.showModal3}
          renderDates={props.renderDates}
          contactForm={props.contactForm}
        />
      </DialogContent>

      {/*/!*MODAL BTNS*!/*/}

      <DialogActions>
        {btnView.backBtnId ? (
          <Button
            id={btnView.backBtnId}
            onClick={e => props.handleBack(e)}
            color="primary"
          >
            Back
          </Button>
        ) : null}

        <Button id={btnView.nextBtnId} onClick={e => props.handleNext(e)}>
          Next
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export default CalendarModal;

CalendarModal.propTypes = {
  //style object
  classes: PropTypes.object,

  //Dates stored here when user clicks a calendar date tile
  renderDates: PropTypes.array,

  //Required boolean prop to open Material UI modals && function to flip boolean to close the modal.
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,

  //modal props
  modalView: PropTypes.object.isRequired,
  btnView: PropTypes.object.isRequired,
  contactForm: PropTypes.object.isRequired,

  //modal buttons functionality
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,

  //add form inputs to parent component state
  handleFormFieldChange: PropTypes.func.isRequired
};
