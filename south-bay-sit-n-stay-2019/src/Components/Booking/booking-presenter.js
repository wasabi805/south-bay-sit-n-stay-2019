import React, { Component } from "react";
import CalendarContainer from "../Calendar/calendar-container";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/styles";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Spinner from "../common/spinner";
import {ButtonTypeOne} from "../common/buttons"

import BookingModalPresenter from "../Modals/booking-modal-container";


const BookingContainer = styled(Box)({
  "& h1": {
    marginBottom: "5rem",
    color: "#5a5a5a",
  },
  background:
    "url('https://sb-sit-2019.s3.amazonaws.com/calendar01-transparent.png')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  backgroundSize: "55%",
  minHeight: "93vh"
});

class BookingSection extends Component {
  constructor(props) {
    super(props);

    //btn refs
    this.state = {
      //customer booking form
      //NOTE: DO NOT CHANGE THE ORDER OF THIS OBJECT
      contactForm: {
        contactFirstName: "",
        contactLastName: "",
        contactEmail: "",
        contactPhone: "",
        contactCity: "",
        dogName: "",
        dogBreed: "",
        dogAge: "",
        dogWeight: "",
        comments: "",
        alias: ""
      },

      city: "",
      query: "",

      //when the next button on the second modal appears
      isSubmit: false,

      //MODAL PROPS
      open: false,
      modalName: "dates",

      openErrorModal: false,

      //calendar props
      bookedDates: [],
      renderDates: [],

      loadSpinner: false
    };
  }

  //INPUT FROM AUTO COMPLETE FOR CITY : located in book-form-presenter.js
  updateCity = (city, query) => {
    this.setState({
      contactForm: {
        ...this.state.contactForm,
        contactCity: query
      }
    });
  };

  //==========  ==========  CALENDAR METHODS  ==========  ==========

  //Gets the days that were clicked from react-calendar module
  getDaysClicked = days => {
    let months = this.props.getCalendarDates(days).payload.months;
    let groupedDates = this.props.renderCalendarModalDates(months).payload;
    let renderDates = [];

    let convertMonth = month => {
      return new Date(2019, parseInt(month - 1, 10), 1).toLocaleString(
        "en-us",
        { month: "long" }
      );
    };

    //TRANSLATE DATES FROM REDUCER INTO ENGLISH
    groupedDates.forEach(item => {
      let month = Object.values(item)[1];
      let days = Object.values(item)[2];

      if (month) {
        let convertedMonth = convertMonth(month);

        //ADD COMMAS TO DATES
        // for (var i = 0; i < days.length - 1; i++) {
        //   days[i] = days[i] + ",";
        // }

        renderDates.push({ month: convertedMonth, days: days });
      }
    });

    //SET STATE TO TRANSLATED DATES
    this.setState({
      renderDates: renderDates
    });
  };

  //==========  ==========  MODAL METHODS ==========  ==========
  handleOpenGenericModal = () => {

    let {renderDates} = this.state

    if(renderDates.length === 0 ){
      this.setState({
        isCalendarHidden: 1,
        openErrorModal: true,
        open: true
      });

      // alert('WHAT THE HELL?? NO DATES')
      return
    }

    if(renderDates.length > 0){
      this.setState({
        isCalendarHidden: 1,
        open: true,
        openErrorModal: false,
      });
    }

  };

  handleCloseGenericModal = () => {
    this.setState({
      open: false,
      modalName: ""
    });
  };

  //NOTE : Validation that runs AFTER user hits submit button occurs here.
  handleNext = e => {
    let { id } = e.currentTarget;

    //uncomment below for debugging
    // alert(id + 'WHAT IS THE ID?')

    if (id === "next-01") {
      this.props.handleNextBtnBookingModal(e);
    }

    //VALIDATE THE FORM
    if (id === "next-02") {
      this.setState({
        isSubmit: true
      });
      this.props.validateBookingFormOnSubmit(this.state.contactForm);
    }

    // ON FORM SUBMIT.....
    if (id === "submit-book-form") {
      this.props.sendRequestToDb(this.state.contactForm);

      //clear the form
      this.setState({
        contactForm: {
          contactFirstName: "",
          contactLastName: "",
          contactEmail: "",
          contactPhone: "",
          contactCity: "",
          dogName: "",
          dogBreed: "",
          dogAge: "",
          dogWeight: "",
          comments: "",
          alias: ""
        }
      });
    }
  };

  handleFormFieldChange = name => event => {
    let { isSubmit } = this.state;
    this.setState(
      {
        contactForm: { ...this.state.contactForm, [name]: event.target.value }
      },
      () => {
        //if the submit button was pressed then run all the validations..
        if (isSubmit === true) {
          this.handleValidation();
        }
      }
    );
  };

  //NOTE : This is the form validation that runs AFTER user hits submit button.
  handleValidation = () => {
    this.props.validateBookingFormOnTyping(this.state.contactForm);
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    let status = this.props.bookingReducer.confirmDbEntry.status;

    //1.)when the axios post to db is complete and form data stored in db...
    if (
      prevProps.bookingReducer.confirmDbEntry.status !== status &&
      status === 200
    ) {
      //2.) Close the loading spinner...
      //3.) then display success modal
      this.props.onSubmitCloseConfirmBookForm();
    }

    if (status === "clear-form") {
      //1.) close confirm modal
      //2.) clear form && selected dates
      this.props.resetAddDbEntryApiStatus();
    }
  }

  /////////////////////////////////////////////////////////////////////////////////

  // RENDER

  /////////////////////////////////////////////////////////////////////////////////
  render() {

    const{buttons}= this.props.bookingReducer;
    let CalendarModalBtn = styled(Button)({
      //PUT STYLES IN HERE LATER
    });

    //uncomment for debugging
    // console.log(this.props, "WHAT ARE THE PROPS FOR BOOKING_PRESENTER??");

    return (
        <React.Fragment>
      <BookingContainer id={"book-now"} className={""} p={6}>
        <Typography variant={"h1"} align="left">
          Check out which days we can provide you service
        </Typography>

        {/*CALENDAR*/}
        {/*<Box component="div" display="inline-block">*/}
        <CalendarContainer getDaysClicked={this.getDaysClicked} />
        {/*</Box>*/}

        {/*THIS IS THE CALENDAR MODAL THAT SUPPLIES USER REQ DATES AND USER INFO*/}
        <BookingModalPresenter
          //open: boolean opens main modal
          //onClose : setState boolean closes main modal
          open={this.state.open}
          onClose={this.handleCloseGenericModal}
          modalName={this.state.modalName}
          //Array of dates that are clicked by user
          renderDates={this.state.renderDates}
          //Booking Form Fields for customer and Dog
          contactForm={this.state.contactForm}
          //Updated Search Query
          contactCity={this.state.contactCity}
          spinner={<Spinner isPosting={this.props.bookingReducer.isPosting} />}
          //Boolean of errors for form validation
          errors={this.props.bookingReducer.errors}
          //Modal Headers
          modalHeader={this.props.modalHeader}
          //Modal View Booleans
          modalView={this.props.bookingReducer.modalView}
          btnView={this.props.bookingReducer.btnView}
          //Modal Button Functions
          handleNext={this.handleNext}
          handleBack={this.props.handleBackBtnBookingModal}
          //Modal Form
          handleFormFieldChange={this.handleFormFieldChange}
          updateCity={this.updateCity}
          openErrorModal={this.state.openErrorModal}

        />

        <div onClick={this.handleOpenGenericModal}
             className={'check-avail-btn-container'}
          >
          <ButtonTypeOne buttons={buttons} />
        </div>

      </BookingContainer>

      </React.Fragment>
    );
  }
}

export default BookingSection;

BookingSection.propTypes = {
  getCalendarDates: PropTypes.func.isRequired,
  renderCalendarModalDates: PropTypes.func.isRequired,
  open: PropTypes.bool
};
