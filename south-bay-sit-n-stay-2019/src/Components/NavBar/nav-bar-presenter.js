import React, { Component } from "react";
import { styled } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

import NavList from "./nav-list";

class NavBarPresenter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { nav_names } = this.props;

    const NavBarWrapper = styled(AppBar)({
      borderBottom: "1px solid white"
    });

    return (
      <div>
        <NavBarWrapper>
          <Toolbar>
            <Typography variant="h1" color="inherit">
              South Bay Sit N' Stay
            </Typography>

            <NavList navNames={nav_names} />
          </Toolbar>
        </NavBarWrapper>
      </div>
    );
  }
}

export default NavBarPresenter;

NavBarPresenter.propTypes = {
  nav_names: PropTypes.array.isRequired
};
