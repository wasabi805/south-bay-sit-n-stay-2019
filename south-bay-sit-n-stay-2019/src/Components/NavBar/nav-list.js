import React from "react";
import { styled } from "@material-ui/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";

// import { Route, Link, HashRouter } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

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

    //Offsets the scroll pos for react-router-hash-link
  const scrollWithOffset = (el, offset)=>{
      const elementPosition = el.offsetTop - offset;
      window.scroll({
          top: elementPosition,
          left: 0,
          behavior: "smooth"
      });
  };

  return (
    <HeaderNav className={`${headerNavClassName}`} component="nav">
      {/*{props.navNames.map(link => {*/}
        {/*return (*/}

          {/*<Link to={link.id} key={link.id}>*/}
            {/*<ListItem key={`${link.id}` + "header-nav"}>*/}
              {/*<ListItemText primary={`${link.name}`} />*/}
            {/*</ListItem>*/}
          {/*</Link>*/}


        {/*);*/}
      {/*})}*/}


        <Link to={'/#home'} >
            <ListItem >
                <ListItemText primary={'home'} />
            </ListItem>
        </Link>

        <Link to={'/about'} >
            <ListItem >
                <ListItemText primary={'about'} />
            </ListItem>
        </Link>

        <Link to={'/services'} >
            <ListItem >
                <ListItemText primary={'services'} />
            </ListItem>
        </Link>

        <Link to={'/#book-now'} scroll={el => scrollWithOffset(el, 60)}  >
            <ListItem >
                <ListItemText primary={'book now'} />
            </ListItem>
        </Link>

        <Link to={'/#gallery'} scroll={el => scrollWithOffset(el, 65)}  >
            <ListItem >
                <ListItemText primary={'gallery'} />
            </ListItem>
        </Link>
    </HeaderNav>
  );
};

export default NavList;

NavList.propTypes = {
  navNames: PropTypes.array.isRequired
};
