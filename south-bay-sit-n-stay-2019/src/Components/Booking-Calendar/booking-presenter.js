import React, { Component } from "react";
import CalendarContainer from "../Calendar/calendar-container";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/styles";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import {
  hasChars,
  hasNumber,
  ifAnyValidationErrors,
  isEmail,
  isPhoneNum
} from "../../../utils/ValidationErrors";

import CalendarModal from "../Modals/calendar-modal";

const BookingContainer = styled(Box)({
  "& h1": {
    marginBottom: "5rem"
  },
  background:
    "url('https://sb-sit-2019.s3.amazonaws.com/calendar01-transparent.png')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  backgroundSize: "55%"
});

class BookingSection extends Component {
  constructor(props) {
    super(props);

    //btn refs

    this.state = {
      //MODAL PROPS
      open: false,
      modalName: "dates",

      //calendar props
      bookedDates: [],
      renderDates: [],

      //new
      modalView: {
        showModal1: true,
        showModal2: false,
        showModal3: false
      },

      btnView: {
        nextBtnId: "next-01",
        nextBtnName: "next",

        backBtnId: ""
      },

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

      isSubmit: false,
      isErrors: true,

      errors: {
        contactFirstName: {
          error: false,
          msg: ""
        },

        contactLastName: {
          error: false,
          msg: ""
        },

        contactEmail: {
          error: false,
          msg: ""
        },

        contactPhone: {
          error: false,
          msg: ""
        },

        contactCity: {
          error: false
        },

        dogName: {
          error: false
        },

        dogBreed: {
          error: false
        },

        dogAge: {
          error: false
        },

        dogWeight: {
          error: false
        },

        comments: {
          error: false
        }
      }
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
    this.setState({
      isCalendarHidden: 1,
      open: true
    });
  };

  handleCloseGenericModal = () => {
    this.setState({
      open: false,
      modalName: ""
    });
  };

  handleNext = e => {
    let { id } = e.currentTarget;

    switch (id) {
      case "next-01":
        this.setState({
          modalView: {
            showModal1: false,
            showModal2: true,
            showModal3: false
          },

          btnView: {
            backBtnId: "back-01",
            nextBtnName: "next",

            nextBtnId: "next-02"
            //wutang
          }
        });
        return;

      case "next-02":
        //CUSTOMER AND DOG INFO FORM VALIDATION OCCURS HERE
        let {
          contactFirstName,
          contactLastName,
          contactEmail,
          contactPhone,
          contactCity,
          dogName,
          dogBreed,
          dogAge,
          dogWeight,
          comments
        } = this.state.contactForm;

        //NOTE: Normally i'd use an empty object and fill with errors if there are any but,
        //Material UI accepts a prop of "error" which should contain a boolean to highlight an input box red if error exists.
        //Since I have that error prop traveling with the error msg, If the key of error is missing without a value of true or false, the page will crash.
        const errors = {
          contactFirstName: { error: false, msg: "" },
          contactLastName: { error: false, msg: "" },
          contactEmail: { error: false, msg: "" },
          contactPhone: { error: false, msg: "" },
          contactCity: { error: false, msg: "" },
          dogName: { error: false, msg: "" },
          dogBreed: { error: false, msg: "" },
          dogAge: { error: false, msg: "" },
          dogWeight: { error: false, msg: "" },
          comments: { error: false, msg: "" }
        };

        // FIRST NAME
        if (contactFirstName.length === 0 || contactFirstName.length < 2) {
          errors["contactFirstName"] = {
            error: true,
            msg: "First name should be more than 1 letter"
          };
        }

        if (
          hasNumber(contactFirstName) === true ||
          hasChars(contactFirstName) === true
        ) {
          errors["contactFirstName"] = {
            error: true,
            msg: "First name should not have numbers or special characters."
          };
        }

        // LAST NAME
        if (contactLastName.length === 0 || contactLastName.length < 2) {
          errors["contactLastName"] = {
            error: true,
            msg: "Last name should be more than 1 letter."
          };
        }

        if (
          hasNumber(contactLastName) === true ||
          hasChars(contactLastName) === true
        ) {
          errors["contactLastName"] = {
            error: true,
            msg: "Last name should not have numbers or special characters."
          };
        }

        //EMAIL

        if (isEmail(contactEmail) === false) {
          errors["contactEmail"] = {
            error: true,
            msg: "Email is invalid format. "
          };
        }

        if (contactEmail.length === 0) {
          errors["contactEmail"] = {
            error: true,
            msg: "*Email required"
          };
        }

        //PHONE
        if (isPhoneNum(contactPhone) !== true) {
          errors["contactPhone"] = {
            error: true,
            msg: "Not a valid phone number"
          };
        }

        if (contactPhone.length === 0) {
          errors["contactPhone"] = {
            error: true,
            msg: "*Phone number required"
          };
        }

        /// FINAL CHECK

        // Converted errors obj into an array below so that I can iterate and check if any of these fields contains a true value for error key.
        // If errors object/converted array has any trues, do not pass | If !errors, move to confirm screen.
        let allErrors = Object.values(errors);
        if (ifAnyValidationErrors(allErrors) === true) {
          //set the errors object to state
          this.setState({
            errors: errors,
            isSubmit: true
          });
          // alert("The form contains ERRORS");
        } else {
          //move on to the confirm screen
          this.setState(
            {
              btnView: {
                backBtnId: "back-02",
                nextBtnId: "",
                nextBtnName: "submit"
              },
              modalView: {
                showModal1: false,
                showModal2: false,
                showModal3: true
              },

              isSubmit: true
            },
            () => {
              // console.log(this.state.isErrors, "FORM SUBMIT WAS CLICKED");
            }
          );
        }
    }
  };

  handleBack = e => {
    let { id } = e.currentTarget;
    switch (id) {
      case "back-01":
        this.setState({
          modalView: {
            showModal1: true,
            showModal2: false,
            showModal3: false
          },

          btnView: {
            backBtnId: "",
            nextBtnId: "next-01"
          }
        });
        return;

      case "back-02":
        this.setState({
          modalView: {
            showModal1: false,
            showModal2: true,
            showModal3: false
          },

          btnView: {
            backBtnId: "back-01",
            nextBtnId: "next-02",
          }
        });
        return;
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

  handleValidation = () => {
    //NOTE: The validation in here runs only after the submit button was pressed and it's primary responsibility
    //is to:
    //      1.) highlight inputs w/ red borders and display error msg if any.
    //      2.) prevent the user from seeing the confirm screen if there are still errors

    // console.log(this.state.contactForm, 'contactForm')
    // console.log(Object.values(this.state.contactForm)[0], 'Object.values(this.state.contactForm).length')
    // console.log('THE ERRORS', this.state.errors)

    //==========  ==========  contactFirstName  ==========  ==========

    //  if contactFirstNAme is entered, reset input color border
    if (
      Object.values(this.state.contactForm)[0].length > 2 &&
      this.state.errors.contactFirstName.error === true
    ) {
      // alert("contactFirstName passes");
      this.setState({
        errors: {
          ...this.state.errors,
          contactFirstName: {
            error: false,
            msg: ""
          }
        }
      });
    }
    //if it's empty again...
    if (
      Object.values(this.state.contactForm)[0].length === 0 &&
      this.state.errors.contactFirstName.error === false
    ) {
      // alert("You were told to correct contactFirstName and now it's empty again!");
      this.setState({
        errors: {
          ...this.state.errors,
          contactFirstName: {
            error: true,
            msg: "First name can not be blank"
          }
        }
      });
    }

    //==========  ==========  contactLastName  ==========  ==========

    // console.log(Object.values(this.state.contactForm)[1], 'Object.values(this.state.contactForm)[1]')
    // console.log(this.state.errors.contactLastName.error, 'this.state.errors.contactLastName.error')

    if (
      Object.values(this.state.contactForm)[1].length > 2 &&
      this.state.errors.contactLastName.error === true
    ) {
      // alert("contactLastName passes");
      this.setState({
        errors: {
          ...this.state.errors,
          contactLastName: {
            error: false,
            msg: ""
          }
        }
      });
    }
    //if it's empty again...
    if (
      Object.values(this.state.contactForm)[1].length === 0 &&
      this.state.errors.contactLastName.error === false
    ) {
      // alert("You were told to correct contactLastName and now it's empty again!");
      this.setState({
        errors: {
          ...this.state.errors,
          contactLastName: {
            error: true,
            msg: "Last name can not be blank"
          }
        }
      });
    }

    //==========  ==========  contactEmail ==========  ==========

    if (
      isEmail(Object.values(this.state.contactForm)[2]) === true &&
      this.state.errors.contactEmail.error === true
    ) {
      // alert("contactEmail passes");
      this.setState({
        errors: {
          ...this.state.errors,
          contactEmail: {
            error: false,
            msg: ""
          }
        }
      });
    }
    //contactEmail is blank again
    if (
      Object.values(this.state.contactForm)[2].length === 0 &&
      this.state.errors.contactEmail.error === false
    ) {
      // alert("You were told to correct contactEmail and now it's empty again!");

      this.setState({
        errors: {
          ...this.state.errors,
          contactEmail: {
            error: true,
            msg: "Email required"
          }
        }
      });
    }

    //==========  ==========  contactPhone ==========  ==========

    if (
      isPhoneNum(Object.values(this.state.contactForm)[3]) === true &&
      this.state.errors.contactPhone.error === true
    ) {
      // alert("contactPhone passes");
      this.setState({
        errors: {
          ...this.state.errors,
          contactPhone: {
            error: false,
            msg: ""
          }
        }
      });
    }

    if (
      Object.values(this.state.contactForm)[3].length === 0 &&
      this.state.errors.contactPhone.error === false
    ) {
      // alert("You were told to correct contactPhone and now it's empty again!");

      this.setState({
        errors: {
          ...this.state.errors,
          contactPhone: {
            error: true,
            msg: "*Phone number required"
          }
        }
      });
    }
  };

  /////////////////////////////////////////////////////////////////////////////////

  // RENDER

  /////////////////////////////////////////////////////////////////////////////////
  render() {
    let CalendarModalBtn = styled(Button)({
      //PUT STYLES IN HERE LATER
    });

    return (
      <BookingContainer p={6} className={""}>
        <Typography variant={"h1"} align="left">
          Check out which days we can provide you service
        </Typography>

        {/*CALENDAR*/}
        <Box component="div" display="inline-block">
          <CalendarContainer getDaysClicked={this.getDaysClicked} />
        </Box>

        {/*THIS WILL OPEN THE CALENDAR MODAL*/}
        <CalendarModalBtn
          variant="outlined"
          onClick={() => this.handleOpenGenericModal()}
        >
          NEW REVIEW DATES
        </CalendarModalBtn>

        {/*THIS IS THE CALENDAR MODAL THAT SUPPLIES USER REQ DATES AND USER INFO*/}
        <CalendarModal
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
          //Boolean of errors for form validation
          errors={this.state.errors}
          //Modal View Booleans
          modalView={this.state.modalView}
          btnView={this.state.btnView}
          //Modal Button Functions
          handleNext={this.handleNext}
          handleBack={this.handleBack}
          //Modal Form
          handleFormFieldChange={this.handleFormFieldChange}
          updateCity={this.updateCity}
        />
      </BookingContainer>
    );
  }
}

export default BookingSection;

BookingSection.propTypes = {
  getCalendarDates: PropTypes.func.isRequired,
  renderCalendarModalDates: PropTypes.func.isRequired,
  open: PropTypes.bool
};
