import {
  HANDLE_NEXT_BTN_BOOKING_MODAL,
  HANDLE_BACK_BTN_BOOKING_MODAL,
  VALIDATE_BOOKING_FORM_ON_SUBMIT,
  VALIDATE_BOOKING_FORM_ON_TYPING,
  SEND_REQUEST_TO_DB,
  ON_SUBMIT_CLOSE_CONFIRM_BOOK_FORM,
  SHOW_CONFIRM_BOOKED_MODAL,
  RESET_ADD_DB_ENTRY_API_STATUS,
  CLEAR_BOOK_FORM,
  SELECT_SVC
} from "../types";

const initialState = {
  msg: "I'm initial state from booking-reducer.js!!!!",
  buttons:[
    {
      id: 'check-availability',
      name: 'AVAILABILITY',
      destinationUrl: "",
      style: 'two'
    },
  ],

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

  modalHeader: "Requested Dates",

  modalView: {
    showModal1: true,
    showModal2: false,
    showModal3: false,
    showModal4: false
  },

  btnView: {
    nextBtnId: "",
    nextBtnName: "",
    backBtnId: ""
  },

  errors: {
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
  },

  isPosting: false,

  confirmDbEntry: {
    status: null
  },

  serviceType: [
    {
      id: "drop-in",
      name: "drop-in",
      bgImg: "ch-img-1",
      bgWrap: "info-wrap-door",
      text: "visit",
    },

    {
      id: "overnight",
      name: "overnight",
      bgImg: "ch-img-2",
      bgWrap: "info-wrap-moon",
      text: "stay",
    },

    {
      id: "boarding",
      name: "boarding",
      bgImg: "ch-img-3",
      bgWrap: "info-wrap-doghouse",
      text: "lodge",
    }
  ],

  requestedServiceType: ""
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SELECT_SVC:
      return {
        ...state,
        requestedServiceType: payload
      };

    case HANDLE_NEXT_BTN_BOOKING_MODAL:
      return {
        ...state,
        modalView: payload.modalView,
        btnView: payload.btnView,
        modalHeader: payload.modalHeader
      };

    case HANDLE_BACK_BTN_BOOKING_MODAL:
      return {
        ...state,
        modalView: payload.modalView,
        btnView: payload.btnView
      };

    case VALIDATE_BOOKING_FORM_ON_SUBMIT:
      return {
        ...state,
        errors: payload.errors,

        modalHeader: payload.modalHeader,

        modalView: {
          showModal1: false,
          showModal2: payload.showModal2,
          showModal3: payload.showModal3,
          showModal4: false
        },

        btnView: {
          nextBtnId: payload.btnView.nextBtnId,
          nextBtnName: payload.btnView.nextBtnName,
          backBtnId: payload.btnView.backBtnId
        },

        contactForm: payload.contactForm
      };

    case VALIDATE_BOOKING_FORM_ON_TYPING:
      return {
        ...state,
        errors: payload
      };

    case SEND_REQUEST_TO_DB:
      //uncomment for debugging
      // console.log(payload, "IS THIS equal to 200?");
      return {
        ...state,

        modalHeader: payload.modalHeader,

        isPosting: payload.isPosting,

        confirmDbEntry: {
          status: payload.status
        }
      };

    case ON_SUBMIT_CLOSE_CONFIRM_BOOK_FORM:
      return {
        ...state,
        isPosting: payload.isPosting,
        modalView: payload.modalView
      };

    case SHOW_CONFIRM_BOOKED_MODAL:
      return {
        ...state,
        isPosting: payload
      };

    case RESET_ADD_DB_ENTRY_API_STATUS:
      return {
        ...state
      };

    case CLEAR_BOOK_FORM:
      return {
        ...state,
        confirmDbEntry: {
          status: payload
        }
      };

    default:
      return state;
  }
}
