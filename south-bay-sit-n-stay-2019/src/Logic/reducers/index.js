import {combineReducers} from 'redux';
import landingReducer from './landing-reducer';
import navigationReducer from './navigation-reducer'

export default combineReducers({
    landingReducer : landingReducer,
    navigationReducer : navigationReducer
});