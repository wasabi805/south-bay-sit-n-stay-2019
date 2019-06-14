import {combineReducers} from 'redux';
import landingReducer from './landing-reducer';
import navigationReducer from './navigation-reducer';
import calendarReducer from './calendar-reducer';
import modalReducer from './modal-reducer'

export default combineReducers({
    landingReducer : landingReducer,
    navigationReducer : navigationReducer,
    calendarReducer : calendarReducer,
    modalReducer : modalReducer,
});