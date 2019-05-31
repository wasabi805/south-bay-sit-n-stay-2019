import * as Constants from "./constants";
import * as Actions from "../actions";

console.log(Constants.INITIAL_STATE);

export default function reducer(
  state = Constants.INITIAL_STATE,
  action = Actions
) {
  switch (action.type) {
    default:
      return state;
  }
}
