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

//----- -----   -----   02  -----   -----   -----

export const cb_img_right_context_left = createMuiTheme();

// header
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

// body1
cb_img_right_context_left.typography.body1 = {
  [cb_img_right_context_left.breakpoints.up("md")]: {
    fontSize: "1.6rem"
  }
};

//----- -----   -----   03  -----   -----   -----

export const card = createMuiTheme();

card.typography.body1={
  [card.breakpoints.up("xs")]: {
    background: "cyan",
    fontSize: '0.2rem',
  }
};

card.typography.body1={
    [card.breakpoints.up("sm")]: {
      background: "pink",
      fontSize: '1.3rem',
    }
};




console.log(card.typography.body1, 'WHAT is cards.typography')