import { RENDER_CALENDAR_MODAL_DATE } from "../types";

const initialState = {
  contextId : "calendar-modal",
  headerOne : "You've selected " ,
  headerTwo : "Pet Bio",
  headerThree : "Confirm",
  subHeaders : ["Please confirm the following dates you've selected are correct:"],
  gutterBottom : ["if correct, click next", "if correct, click next"],

};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "RENDER_CALENDAR_MODAL_DATE":
      return action.payload;

    default:
      return state;
  }
}
