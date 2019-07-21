import { createMuiTheme } from "@material-ui/core";

export const cb_context_right_img_left = createMuiTheme();

cb_context_right_img_left.typography.h2 = {
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

cb_context_right_img_left.typography.body1 = {
  [cb_context_right_img_left.breakpoints.up("md")]: {
    fontSize: "1.6rem"
  }
};

export const cb_img_right_context_left = createMuiTheme();

cb_img_right_context_left.typography.h2 = {
  [cb_img_right_context_left.breakpoints.up("xs")]: {
    fontSize: "1rem"
  },

  [cb_img_right_context_left.breakpoints.up("sm")]: {
    fontSize: "2rem"
  },

  [cb_img_right_context_left.breakpoints.up("md")]: {
    fontSize: "4rem"
  }
};

cb_img_right_context_left.typography.body1 = {
  [cb_img_right_context_left.breakpoints.up("md")]: {
    fontSize: "1.6rem"
  }
};

console.log(cb_img_right_context_left, "what is cb_img_right_context_left");
