import {combineReducers} from 'redux';
import navigationReducer from './navigation-reducer';
import landingReducer from './landing-reducer';
import calendarReducer from './calendar-reducer';
import aboutReducer from './about-reducer';
import modalReducer from './modal-reducer';
import bookingReducer from "./booking-reducer"
import servicesReducer from "./services-reducer"


export default combineReducers({
    landingReducer : landingReducer,
    navigationReducer : navigationReducer,
    calendarReducer : calendarReducer,
    modalReducer : modalReducer,
    aboutReducer : aboutReducer,
    bookingReducer: bookingReducer,
    servicesReducer: servicesReducer,
});