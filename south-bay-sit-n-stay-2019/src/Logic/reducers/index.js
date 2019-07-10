import {combineReducers} from 'redux';
import navigationReducer from './navigation-reducer';
import landingReducer from './landing-reducer';
import calendarReducer from './calendar-reducer';
import aboutReducer from './about-reducer';
import modalReducer from './modal-reducer';
import contactFormReducer from './contact-form-reducer';
import bookingReducer from "./booking-reducer"


export default combineReducers({
    landingReducer : landingReducer,
    navigationReducer : navigationReducer,
    calendarReducer : calendarReducer,
    modalReducer : modalReducer,
    aboutReducer : aboutReducer,
    contactFormReducer : contactFormReducer,
    bookingReducer: bookingReducer
});