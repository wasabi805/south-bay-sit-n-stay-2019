import React, {Component} from "react";
import { styled } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import NavList from "./nav-list";

class NavBarPresenter extends Component {
  constructor(props){
    super(props);


  }

  render(){
    let navNames = this.props.nav_names


    const NavBarWrapper = styled(AppBar)({
      borderBottom: "1px solid white"
    });


    console.log(this.props , 'ALMOST THERE')

    return (
        <div>
          <NavBarWrapper>
            <Toolbar>
              <Typography variant="h1" color="inherit">
                South Bay Sit N' Stay
              </Typography>

              <NavList navNames={navNames} />
            </Toolbar>
          </NavBarWrapper>
        </div>
    );
  }


};

export default NavBarPresenter;
