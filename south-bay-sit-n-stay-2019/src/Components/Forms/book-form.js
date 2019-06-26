import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grow in={this.props.showModal2}>
        <form
          style={{ position: "relative", textAlign: "center" }}
          noValidate
          autoComplete="off"
        >
          {/*NOTE : Material UI have an example where they add value as a prop however, it will cause the label to
                        overlap the form input if you include a 'value' prop.
                        YOU WILL NEED TO SPECIFY A NAME prop though.

                        see : https://github.com/mui-org/material-ui/issues/5501
                    */}
          <TextField
            id="outlined-name"
            label="First Name"
            className={useStyles.textField}
            name={"contactFirstName"}
            onChange={this.props.handleFormFieldChange("contactFirstName")}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-name"
            label="Last Name"
            className={useStyles.textField}
            name={"contactLastName"}
            onChange={this.props.handleFormFieldChange("contactLastName")}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-contactPhone"
            label="Phone"
            className={useStyles.textField}
            name={"contactPhone"}
            onChange={this.props.handleFormFieldChange("contactPhone")}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-contactEmail"
            label="Email"
            className={useStyles.textField}
            name={"contactEmail"}
            onChange={this.props.handleFormFieldChange("contactEmail")}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-contactCity"
            label="City"
            className={useStyles.textField}
            name={"contactCity"}
            onChange={this.props.handleFormFieldChange("contactCity")}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-contactCity"
            label="Dog Name"
            className={useStyles.textField}
            name={"dogName"}
            onChange={this.props.handleFormFieldChange("dogName")}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-contactCity"
            label="Breed"
            className={useStyles.textField}
            name={"dogBreed"}
            onChange={this.props.handleFormFieldChange("dogBreed")}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-contactCity"
            label="Age"
            className={useStyles.textField}
            name={"dogAge"}
            onChange={this.props.handleFormFieldChange("dogAge")}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-contactCity"
            label="Weight"
            className={useStyles.textField}
            name={"dogWeight"}
            onChange={this.props.handleFormFieldChange("dogWeight")}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-contactCity"
            label="Comments | Questions"
            className={useStyles.textField}
            name={"comments"}
            onChange={this.props.handleFormFieldChange("comments")}
            margin="normal"
            variant="outlined"
          />
        </form>
      </Grow>
    );
  }
}

export default BookForm;

BookForm.propTypes = {
  //Shows the Form Modal
  showModal2: PropTypes.bool.isRequired,

  //State from parent for form Input Fields
  contactForm: PropTypes.object.isRequired,

  //sets state in parent when form input is entered by user
  handleFormFieldChange: PropTypes.func.isRequired
};
