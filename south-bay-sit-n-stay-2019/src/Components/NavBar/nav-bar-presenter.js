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
    this.state = {
      navBarColor: "transparent"
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      navBarColor: "#673ab7"
    });

    setTimeout(() => {
      this.setState({ navBarColor: "transparent" });
    }, 3000);
  };

  render() {
    let { nav_names } = this.props;

    const NavBarLogo = styled(Typography)({
      fontSize: "3rem"
    });

    const NavBarWrapper = styled(AppBar)({
      backgroundColor: this.state.navBarColor,
      "&:hover": {
        backgroundColor: "#673ab7"
      },

      transition: "backgroundColor 1s"
    });

    return (
      <div>
        <NavBarWrapper id={"navBar"}>
          <Toolbar>
            <NavBarLogo variant="h2">South Bay Sit N' Stay</NavBarLogo>

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
