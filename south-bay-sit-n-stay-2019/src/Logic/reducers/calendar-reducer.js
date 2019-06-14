import { CONFIRM_CALENDAR_DATES } from "../types";

const initialState = {
  calendarTest: "I'm just a string"
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "CONFIRM_CALENDAR_DATES":
      return action.payload;

    default:
      return state;
  }
}
