import { CONFIRM_CALENDAR_DATES , SHOW_CONFIRM_DATES } from "../types";

const initialState = {
  calendarTest: "I'm just a string"
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "CONFIRM_CALENDAR_DATES":
      return action.payload;


    case SHOW_CONFIRM_DATES:
      return action.payload;

    default:
      return state;
  }
}
