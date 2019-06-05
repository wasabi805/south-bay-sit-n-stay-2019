import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { palette, compose, spacing } from "@material-ui/system";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import { styled } from "@material-ui/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";

const footerTheme = createMuiTheme({
  palette: {
    primary: deepPurple
  },

  typography: {
    fontFamily: "Roboto",

    h1: {
      fontWeight: "800",
      fontSize: "3rem",
      zIndex: 500
    },

    h2: {
      fontSize: "1.5rem"
    }
  }
});

const FooterContainer = styled(Container)(
  compose(
    spacing,
    palette
  )
);

const FooterColumn = styled("div")(
  compose(
    spacing,
    palette
  )
);

const SocialList = styled(List)(
  compose(
    spacing,
    palette
  )
);

let useStyles = makeStyles(theme => ({
  footerMain: {
    display: "flex",
    background: "linear-gradient(to bottom, #7028e4 0%, #e5b2ca 100%)",
    //Below is a color I'm considering using
    // background: "linear-gradient(to bottom, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%)",
    minHeight: "calc(40vh)",
    paddingTop: "4rem",
    color: "#e6e6e6"
  },

  footerColumn1: {
    flexBasis: "40%",
    display: "block"
  },

  footerColumn2: {
    border: "1px solid yellow",
    flex: 1,
    display: "block"
  },

  socialList: {
    padding: 0
  },

  socialListItem: {
    padding: 0,
    display: "inline-block",
    width: " 20%"
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={footerTheme}>
      <FooterContainer className={classes.footerMain}>
        <FooterColumn className={classes.footerColumn1}>
          <Typography variant={"h1"} mb={2}>
            Contact
          </Typography>

          <Typography variant={"h1"}>Follow us</Typography>

          <SocialList className={classes.socialList}>
            <ListItem className={classes.socialListItem}>
              <ListItemText>
                <Typography variant={"h6"}>Facebook</Typography>
              </ListItemText>
            </ListItem>

            <ListItem className={classes.socialListItem}>
              <ListItemText>
                <Typography variant={"h6"}>Instagram</Typography>
              </ListItemText>
            </ListItem>

            <ListItem className={classes.socialListItem}>
              <ListItemText>
                <Typography variant={"h6"}>Yelp</Typography>
              </ListItemText>
            </ListItem>
          </SocialList>
        </FooterColumn>

        <FooterColumn className={classes.footerColumn}>
          <Typography variant={"h1"}>Newsletter</Typography>
          <Typography variant={"p"}>
            Sign up to recieve our newsletter to stay up to date.
          </Typography>
        </FooterColumn>
      </FooterContainer>
    </ThemeProvider>
  );
};

export default Footer;
