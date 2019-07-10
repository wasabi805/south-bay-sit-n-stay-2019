import {HANDLE_NEXT_BTN_BOOKING_MODAL, HANDLE_BACK_BTN_BOOKING_MODAL , VALIDATE_BOOKING_FORM_ON_SUBMIT , VALIDATE_BOOKING_FORM_ON_TYPING } from "../types";

const initialState = {
    msg: "I'm initial state from booking-reducer.js",

    modalView: {
        showModal1: true,
        showModal2: false,
        showModal3: false,
        showModal4: false,
    },

    btnView : {
        nextBtnId: "next-01",
        nextBtnName: "next",
        backBtnId : "",
    },

    errors : {
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
    }
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case HANDLE_NEXT_BTN_BOOKING_MODAL:
            return {
                ...state,
                modalView: payload.modalView,
                btnView: payload.btnView
            };

        case HANDLE_BACK_BTN_BOOKING_MODAL:

            return{
                ...state,
                modalView: payload.modalView,
                btnView: payload.btnView
            };

        case VALIDATE_BOOKING_FORM_ON_SUBMIT:
            return {
                ...state,
                errors: payload
            };


        case VALIDATE_BOOKING_FORM_ON_TYPING:
            return{
                ...state,
                errors: payload
            };

        default:
            return state;
    }
}