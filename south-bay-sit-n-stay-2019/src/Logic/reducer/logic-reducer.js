import * as Constants from "./constants";
import * as Actions from "../actions";

import {TEST_ACTION, GET_DATE_RANGES , GET_REQUESTED_DATES} from "../types";


export default function reducer( state = Constants.INITIAL_STATE,
    action = Actions) {

  switch (action.type) {

    case TEST_ACTION:
      return{
        testMe : action.payload
      };

    case GET_DATE_RANGES:
      return action.payload;

    case GET_REQUESTED_DATES:
      return action.payload;

    default:
      return state;
  }
}
