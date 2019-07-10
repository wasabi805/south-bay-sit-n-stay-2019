import {HANDLE_BACK_BTN_BOOKING_MODAL, HANDLE_NEXT_BTN_BOOKING_MODAL , VALIDATE_BOOKING_FORM_ON_SUBMIT , VALIDATE_BOOKING_FORM_ON_TYPING} from "../types"
import {hasChars, hasNumber, ifAnyValidationErrors, isEmail, isPhoneNum} from "../../../utils/ValidationErrors";


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



export const validateBookingFormOnSubmit=(formValues)=>{
    let {contactFirstName, contactLastName , contactEmail , contactPhone , contactCity , dogName , dogBreed , dogAge, dogWeight , comments, alias} = formValues
    console.log(contactFirstName, contactLastName, 'formValues');

    //contact First Name
    (contactFirstName.length < 2 ) ? errors["contactFirstName"] = {error: true, msg: "First name should be more than 1 letter"} : null;
    (hasNumber(contactFirstName) === true || hasChars(contactFirstName) === true) ? errors["contactFirstName"] = {error: true, msg: "First name should not have numbers or special characters."} : null;

    //contact Last Name
    (contactLastName.length < 2) ? errors["contactLastName"] = {error: true, msg: "Last name should be more than 1 letter"} : null;
    (hasNumber(contactLastName) === true || hasChars(contactLastName) === true) ? errors["contactLastName"] = {error: true, msg: "Last name should not have numbers or special characters."} : null;

    //contact email
    (isEmail(contactEmail) === false) ? errors["contactEmail"] = {error: true, msg: "Email is invalid format. "} : null;
    (contactEmail.length === 0) ? errors["contactEmail"] = {error: true, msg: "*Email required"} :null;

    //contact phone
    (isPhoneNum(contactPhone) !== true) ? errors["contactPhone"] = {error: true, msg: "Not a valid phone number"} :null;
    (contactPhone.length === 0) ?  errors["contactPhone"] = {error: true, msg: "*Phone number required"}:null;

    console.log('DOES THE TERNARY WORK???' , errors );

    return{
        type: VALIDATE_BOOKING_FORM_ON_SUBMIT,
        payload: errors
    }

};


export const validateBookingFormOnTyping =(formValues)=>{
    console.log(' I SHOULD BE ON REPREAT' , formValues)
    let {contactFirstName, contactLastName , contactEmail , contactPhone , contactCity , dogName , dogBreed , dogAge, dogWeight , comments, alias} = formValues

    if(contactFirstName.length > 2){errors.contactFirstName = { error: false, msg: "" }}
    if(contactLastName.length > 2){errors.contactLastName = { error: false, msg: "" }}
    if(contactEmail.length > 2){errors.contactEmail = { error: false, msg: "" }}
    if(contactPhone.length > 2){errors.contactPhone = { error: false, msg: "" }}


    console.log(contactFirstName.length)

    return{
        type: VALIDATE_BOOKING_FORM_ON_TYPING,
        payload : errors

    }
};



export const handleNextBtnBookingModal =(e)=>{
    let { id } = e.currentTarget;
    let payload = {
        msg : 'stuff in here'
    };


    switch (id) {
        //The next btn after user selects dates from calendar component
        case "next-01":
            payload.modalView = {
                showModal1: false,
                showModal2: true,
                showModal3: false
            };
            payload.btnView={
                backBtnId: "back-01",
                nextBtnName: "next",
                nextBtnId: "next-02"
            };
            break;

        case "next-02":

            //if(passValidationFORMVALIDATION){
            // } //run the code below


            // validateBookingFormOnSubmit();
            //
            payload.modalView = {
                showModal1: false,
                showModal2: false,
                showModal3: true
            };
            payload.btnView={
                backBtnId: "back-02",
                nextBtnId: "submit-request-form",
                nextBtnName: "submit"
            };
            break



    }

    return{
        type: HANDLE_NEXT_BTN_BOOKING_MODAL,
        payload : payload
    }

};



export const handleBackBtnBookingModal = (e)=>{
    let { id } = e.currentTarget;
    let payload = {};

    switch (id) {
        case "back-01" :
            payload.modalView = {
                showModal1: true,
                showModal2: false,
                showModal3: false
            };
            payload.btnView={
                backBtnId: "",
                nextBtnId: "next-01"
            };
            break;

        case "back-02":
            payload.modalView = {
                showModal1: false,
                showModal2: true,
                showModal3: false
            };
            payload.btnView={
                backBtnId: "back-01",
                nextBtnId: "next-02"
            };

            break;
    }


    return{
        type: HANDLE_BACK_BTN_BOOKING_MODAL,
        payload: payload
    }
};