import { createMuiTheme } from "@material-ui/core";

export const sectionHeader = createMuiTheme();

sectionHeader.typography.h2 = {
  [sectionHeader.breakpoints.up("xs")]: {
    fontSize: "1rem"
  },

  [sectionHeader.breakpoints.up("sm")]: {
    fontSize: "2rem"
  },

  [sectionHeader.breakpoints.up("md")]: {
    fontSize: "4rem"
  }
};

sectionHeader.typography.body1 = {
  [sectionHeader.breakpoints.up("md")]: {
    fontSize: "1.6rem"
  }
};
