import { RENDER_CALENDAR_MODAL_DATE, SEND_REQUEST_TO_DB } from "../types";

const initialState = {
  contextId: "calendar-modal",
  headerOne: "You've selected ",
  headerTwo: "Pet Bio",
  headerThree: "Confirm",
  subHeaders: [
    "Please confirm the following dates you've selected are correct:"
  ],
  gutterBottom: ["if correct, click next", "if correct, click next"],

  confirmDbEntry: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "RENDER_CALENDAR_MODAL_DATE":
      return action.payload;

    case "SEND_REQUEST_TO_DB":
      return {
        ...state,
        confirmDbEntry: action.payload
      };

    default:
      return state;
  }
}
