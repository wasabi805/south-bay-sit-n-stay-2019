import { createMuiTheme } from "@material-ui/core";

export const wrapperTheme = createMuiTheme();

wrapperTheme.typography.h2 = {

    [cb_context_right_img_left.breakpoints.up("xs")]: {
        fontSize: "1rem"
    },

    [cb_context_right_img_left.breakpoints.up("sm")]: {
        fontSize: "2rem"
    },

    [cb_context_right_img_left.breakpoints.up("md")]: {
        fontSize: "4rem"
    }
};
