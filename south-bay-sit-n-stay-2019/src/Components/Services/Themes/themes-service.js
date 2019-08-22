import { createMuiTheme } from "@material-ui/core";

export const section2Headers = createMuiTheme();

section2Headers.typography.h1 = {
  fontSize: "3rem",
  "@media (min-width:600px)": {
    fontSize: "4.5rem"
  },
  [section2Headers.breakpoints.up("md")]: {
    fontSize: "6rem"
  }
};
