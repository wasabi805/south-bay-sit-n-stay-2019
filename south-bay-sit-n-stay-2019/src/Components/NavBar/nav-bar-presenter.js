import React from "react";
import { styled } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import NavList from "./nav-list";

const NavBarPresenter = nav_names => {
  let navLocations = Object.values(nav_names)[0];

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

          <NavList navLocations={navLocations} />
        </Toolbar>
      </NavBarWrapper>
    </div>
  );
};

export default NavBarPresenter;
