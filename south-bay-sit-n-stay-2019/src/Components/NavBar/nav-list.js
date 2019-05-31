import React from "react";
import { styled } from "@material-ui/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const NavList = props => {
  let headerNavClassName = "headerNav";

  const HeaderNav = styled(List)({
    display: "flex",
    position: "relative",
    width: "100%",
    maxWidth: "35%",
    left: "0",
    right: "0",
    margin: "auto"
  });

  return (
    <HeaderNav className={`${headerNavClassName}`} component="nav">
      {props.navLocations.map(link => {
        console.log(link);
        let renderLink = link;

        return (
          <ListItem key={`${link}` + "header-nav"}>
            <ListItemText primary={`${renderLink}`} />
          </ListItem>
        );
      })}
    </HeaderNav>
  );
};

export default NavList;
