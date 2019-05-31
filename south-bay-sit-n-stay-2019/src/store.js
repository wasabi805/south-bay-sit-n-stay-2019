import thunk from "redux-thunk";
import { combineReducers, applyMiddleware, createStore } from "redux";
import Logic from "./Logic/reducer/logic-reducer";

const middleware = [thunk];

const store = createStore(
  combineReducers({
    Logic
  }),
  applyMiddleware(...middleware)
);

export default store;
