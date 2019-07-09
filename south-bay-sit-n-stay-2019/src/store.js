import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Logic/reducers";
import axios from "axios";
import { createLogger } from 'redux-logger';

const initialState = {};

const middleware = [thunk, createLogger()];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

//see : https://www.youtube.com/watch?v=Td-2D-_7Y2E
//  TODO : HANDLES ASYNC ACTIONS : this later to fill in reserved dates in mLab

// store.dispatch((dispatch)=>{
// dispatch({type : "FOO"})
// } );

export default store;
