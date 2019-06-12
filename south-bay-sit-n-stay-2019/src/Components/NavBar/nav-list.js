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


  console.log(props.navNames.map((item)=>{
    return item
  }), 'FROM NAV LIST')

  return (
    <HeaderNav className={`${headerNavClassName}`} component="nav">
      {/*{props.navNames.map(link => {*/}
        {/*return (*/}
          {/*<ListItem key={`${link}` + "header-nav"}>*/}
            {/*<ListItemText primary={`${link}`} />*/}
          {/*</ListItem>*/}
        {/*);*/}
      {/*})}*/}


    </HeaderNav>
  );
};

export default NavList;
