import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContentText from "@material-ui/core/DialogContentText";
import Slide from "@material-ui/core/Slide";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import BookFormContainer from "../Forms/book-form-container";
import ConfirmBook from "./booking/confirm-book";
import SuccessBook from "./booking/success-book";
import SelectedDates from "./booking/select-svc";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
    color: "#9c8e8e"
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
    position: "relative",
    // padding: theme.spacing(2),
    padding: theme.spacing(2),
    paddingBottom: "4rem",
    backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)"
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

const BookingModalPresenter = withStyles(styles)(props => {
  const { errors, bookingReducer, openErrorModal } = props;
  const { modalView, btnView, modalHeader, selectSvc } = props.bookingReducer;
  console.log(openErrorModal, "is this here openErrorModal");

  let success = () => {
    return (
      <Dialog maxWidth={"md"} open={props.open} onClose={props.onClose}>
        <DialogTitle id="customized-dialog-title" onClose={props.onClose}>
          {props.bookingReducer.modalHeader}
        </DialogTitle>

        <div>
          <DialogContent dividers>
            <SelectedDates
              showModal1={modalView.showModal1}
              renderDates={props.renderDates}
              serviceType={props.serviceType}
              selectSvc={props.selectSvc}
              handleNextBtnBookingModal={props.handleNextBtnBookingModal}
            />

            {/*LOADING SPINNER : submit booking form*/}
            {props.spinner}

            <BookFormContainer
              showModal2={modalView.showModal2}
              errors={errors}
              contactForm={props.contactForm}
              handleFormFieldChange={props.handleFormFieldChange}
              updateCity={props.updateCity}
              //CONDITIONAL RENDER
            />

            <ConfirmBook
              showModal3={modalView.showModal3}
              renderDates={props.renderDates}
              contactForm={props.contactForm}
              contactCity={props.contactCity}
              requestedServiceType={props.requestedServiceType}
            />

            <SuccessBook showModal4={bookingReducer.modalView.showModal4} />
            {/*</div>*/}
          </DialogContent>
        </div>

        {/*=====  ===== ===== MODAL BUTTONS  ===== ===== ===== */}

        <DialogActions>
          {/* ----- ----- BACK BUTTON ----- -----*/}
          {/*HIDE THE BACK BUTTON ON THE FIRST MODAL*/}
          {btnView.backBtnId ? (
            <Button
              id={btnView.backBtnId}
              onClick={e => props.handleBackBtnBookingModal(e)}
              color="primary"
            >
              Back
            </Button>
          ) : null}

          {/* ----- ----- NEXT BUTTON ----- ----- */}

          <Button
            className={"NEXT-BUTTONS"}
            id={bookingReducer.btnView.nextBtnId}
            onClick={e => {
              e.preventDefault();
              //this is getting passed down from react state
              props.handleNext(e);
            }}
          >
            {bookingReducer.btnView.nextBtnName}
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  let fail = () => {
    let { open} = props;
    console.log(props, "WHAT ARE THESE ??");

    return (
      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={props.onClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Please select a date before proceeding"}
          </DialogTitle>
          <DialogContent style={{
            // minHeight: "15rem",
            background: "white" }}>
            <MuiDialogContentText id="alert-dialog-slide-description">
              Click on a at least one day on the calendar to get started with our services.
            </MuiDialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.onClose} color="primary">
              close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  let handleRenderModal = () => {
    if (openErrorModal === false) {
      return success();
    }

    if (openErrorModal === true) return fail();
  };

  return handleRenderModal();
});

export default BookingModalPresenter;

BookingModalPresenter.propTypes = {
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
  handleFormFieldChange: PropTypes.func.isRequired,

  //Updated Search Query
  contactCity: PropTypes.string,
  //grabs the autocomplete field for city
  updateCity: PropTypes.func.isRequired
};
