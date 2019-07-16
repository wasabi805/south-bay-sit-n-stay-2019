import {
  HANDLE_BACK_BTN_BOOKING_MODAL,
  HANDLE_NEXT_BTN_BOOKING_MODAL,
  VALIDATE_BOOKING_FORM_ON_SUBMIT,
  VALIDATE_BOOKING_FORM_ON_TYPING,
  SEND_REQUEST_TO_DB,
  CLEAR_BOOK_FORM,
  RESET_ADD_DB_ENTRY_API_STATUS,
  SHOW_CONFIRM_BOOKED_MODAL,
  ON_SUBMIT_CLOSE_CONFIRM_BOOK_FORM,
  SELECT_SVC
} from "../types";
import {
  hasChars,
  hasNumber,
  ifAnyValidationErrors,
  isEmail,
  isPhoneNum
} from "../../../utils/ValidationErrors";
import axios from "axios";
require("regenerator-runtime/runtime");

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

export const validateBookingFormOnSubmit = formValues => {
  let {
    contactFirstName,
    contactLastName,
    contactEmail,
    contactPhone,
    contactCity,

    dogName,
    dogAge,
    dogWeight,
    comments
  } = formValues;

  //contact First Name
  contactFirstName.length < 2
    ? (errors["contactFirstName"] = {
        error: true,
        msg: "First name should be more than 1 letter"
      })
    : null;
  hasNumber(contactFirstName) === true || hasChars(contactFirstName) === true
    ? (errors["contactFirstName"] = {
        error: true,
        msg: "First name should not have numbers or special characters."
      })
    : null;

  //contact Last Name
  contactLastName.length < 2
    ? (errors["contactLastName"] = {
        error: true,
        msg: "Last name should be more than 1 letter"
      })
    : null;
  hasNumber(contactLastName) === true || hasChars(contactLastName) === true
    ? (errors["contactLastName"] = {
        error: true,
        msg: "Last name should not have numbers or special characters."
      })
    : null;

  //contact email
  isEmail(contactEmail) === false
    ? (errors["contactEmail"] = {
        error: true,
        msg: "Email is invalid format. "
      })
    : null;
  contactEmail.length === 0
    ? (errors["contactEmail"] = { error: true, msg: "*Email required" })
    : null;

  //contact phone
  isPhoneNum(contactPhone) !== true
    ? (errors["contactPhone"] = {
        error: true,
        msg: "Not a valid phone number"
      })
    : null;
  contactPhone.length === 0
    ? (errors["contactPhone"] = { error: true, msg: "*Phone number required" })
    : null;

  //----- ----- uncomment below for debugging ----- -----
  // console.log("DO THE TERNARY FUNCTIONS CATCH ANY ERRORS???", errors);

  //CHECK FOR ERRORS
  let requiredFields = Object.values(errors); //the error obj above, only grabbing what's required
  let errCount = 0;
  let modalHeader = "ifYouSeeTHisItIsAModalTitleError";
  let showModal2 = true;
  let showModal3 = false;
  let showModal1 = false;
  let contactForm = {};

  let btnView = {};

  for (var i = 0; i < requiredFields.length - 6; i++) {
    errCount = errCount + requiredFields[i].msg.length;
  }

  if (errCount === 0) {
    //NEXT, hold the form data in redux store,  move to the confirm screen

    modalHeader = "Confirm";
    showModal1 = false;
    showModal2 = false;
    showModal3 = true;
    btnView.nextBtnId = "submit-book-form";
    btnView.nextBtnName = "SUBMIT";
    btnView.backBtnId = "back-02";
    contactForm.contactFirstName = contactFirstName;
    contactForm.contactLastName = contactLastName;
    contactForm.contactEmail = contactEmail;
    contactForm.contactPhone = contactPhone;
    contactForm.contactCity = contactCity;
    contactForm.dogName = dogName;
    contactForm.dogBreed = dogAge;
    contactForm.dogWeight = dogWeight;
    contactForm.comments = comments;
  }

  if (errCount > 0) {
    // btnView.nextBtnId = "submit-book-form";
    btnView.nextBtnName = "next";
    btnView.nextBtnId = "next-02";
    btnView.backBtnId = "back-01";
  }

  return {
    type: VALIDATE_BOOKING_FORM_ON_SUBMIT,
    payload: {
      errors: errors,
      modalHeader: modalHeader,
      showModal1: showModal1,
      showModal2: showModal2,
      showModal3: showModal3,
      btnView: btnView,
      contactForm: contactForm
    }
  };
};

export const validateBookingFormOnTyping = formValues => {
  // console.log(' I SHOULD BE ON REPREAT' , formValues)
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
    comments,
    alias
  } = formValues;

  if (contactFirstName.length > 2) {
    errors.contactFirstName = { error: false, msg: "" };
  }
  if (contactLastName.length > 2) {
    errors.contactLastName = { error: false, msg: "" };
  }
  if (contactEmail.length > 2) {
    errors.contactEmail = { error: false, msg: "" };
  }
  if (contactPhone.length > 2) {
    errors.contactPhone = { error: false, msg: "" };
  }

  return {
    type: VALIDATE_BOOKING_FORM_ON_TYPING,
    payload: errors
  };
};

export const sendRequestToDb = userData => {
  let payload = {};

  payload.modalHeader = ".";

  return dispatch => {
    //    LOAD SPINNER
    payload.isPosting = true;

    dispatch({
      type: SEND_REQUEST_TO_DB,
      payload: payload
    });

    return axios
      .post("api/booking/requests/book-now", userData)

      .then(res => {
        payload.status = res.status;

        return payload;
      })
      .then(payload => {
        // console.log("WHAT IS THE PAYLOAD RETURNING????", payload);

        return dispatch({
          type: SEND_REQUEST_TO_DB,
          //this status will respond with a 200 status then ... confirm that with action below
          payload: payload
        });
      })
      .catch(err => {
        dispatch({
          type: SEND_REQUEST_TO_DB,
          payload: err
        });
      });
  };
};

export const handleNextBtnBookingModal = (e, data, classDescrip) => {
  let { id } = e.currentTarget;

  let payload = {
    msg: "stuff in here"
  };
  // alert('THE BTN ID IS '+id)

  if (classDescrip && classDescrip === "next-01") {
    payload.modalView = {
      showModal1: false,
      showModal2: true,
      showModal3: false
    };
    payload.btnView = {
      backBtnId: "back-01",
      nextBtnName: "next",
      nextBtnId: "next-02"
    };
    payload.modalHeader = "Contact Information";
  }

  switch (id) {
    //The next btn after user selects dates from calendar component
    case "next-01":
      payload.modalView = {
        showModal1: false,
        showModal2: true,
        showModal3: false
      };
      payload.btnView = {
        backBtnId: "back-01",
        nextBtnName: "next",
        nextBtnId: "next-02"
      };
      payload.modalHeader = "Contact Information";

      break;

    case "next-02":
      payload.modalView = {
        showModal1: false,
        showModal2: false,
        showModal3: true
      };

      payload.btnView = {
        backBtnId: "back-02",
        nextBtnId: "submit-book-form",
        nextBtnName: "submit"
      };

      break;
  }

  return {
    type: HANDLE_NEXT_BTN_BOOKING_MODAL,
    payload: payload
  };
};

export const handleBackBtnBookingModal = e => {
  let { id } = e.currentTarget;
  let payload = {};

  switch (id) {
    case "back-01":
      payload.modalView = {
        showModal1: true,
        showModal2: false,
        showModal3: false
      };
      payload.btnView = {
        backBtnId: "",
        nextBtnId: "next-01",
        nextBtnName: "next"
      };
      break;

    case "back-02":
      payload.modalView = {
        showModal1: false,
        showModal2: true,
        showModal3: false
      };
      payload.btnView = {
        backBtnId: "back-01",
        nextBtnId: "next-02",
        nextBtnName: "next YO"
      };
      break;
  }

  return {
    type: HANDLE_BACK_BTN_BOOKING_MODAL,
    payload: payload
  };
};

export const onSubmitCloseConfirmBookForm = () => {
  return {
    type: ON_SUBMIT_CLOSE_CONFIRM_BOOK_FORM,

    payload: {
      isPosting: false,

      modalView: {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: true
      }
    }
  };
};

export const showConfirmBookedModal = () => {
  return {
    type: SHOW_CONFIRM_BOOKED_MODAL,
    payload: false //WHEN THIS MODAL APPEARS, REMOVE THE SPINNER
  };
};

export const resetAddDbEntryApiStatus = () => {
  return {
    type: RESET_ADD_DB_ENTRY_API_STATUS,
    payload: null
  };
};

export const clearBookForm = () => {
  return {
    type: CLEAR_BOOK_FORM,
    payload: ""
  };
};

export const selectSvc = id => {
  return {
    type: SELECT_SVC,
    payload: id
  };
};
