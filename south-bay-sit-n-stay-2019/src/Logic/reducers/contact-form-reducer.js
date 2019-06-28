import { SET_CONTACT_FORM_FIELDS } from "../types";

const initialState = {



};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "SET_CONTACT_FORM_FIELDS":
            return state;

        default:
            return state;
    }
}