import React from "react";
import { styled } from "@material-ui/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavList = props => {
  let headerNavClassName = "headerNav";

  const HeaderNav = styled(List)({
    display: "flex",
    position: "relative",
    width: "100%",
    maxWidth: "35%",
    left: "0",
    right: "0",
    margin: "auto",
    "& a" :{
      color :'white',
      textDecoration : 'none',
    }
  });

  return (
    <HeaderNav className={`${headerNavClassName}`} component="nav">
      {props.navNames.map(link => {
        return (
          <Link to={link.id} key={link.id}>
            <ListItem key={`${link.id}` + "header-nav"}>
              <ListItemText primary={`${link.name}`} />
            </ListItem>
          </Link>
        );
      })}
    </HeaderNav>
  );
};

export default NavList;

NavList.propTypes = {
  navNames: PropTypes.array.isRequired
};
