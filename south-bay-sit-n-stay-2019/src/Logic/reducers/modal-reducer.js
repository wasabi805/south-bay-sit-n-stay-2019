import { RENDER_CALENDAR_MODAL_DATE } from "../types";

const initialState = {
  modatTEST: "I'm just a string from MODAL REDUCER"
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
