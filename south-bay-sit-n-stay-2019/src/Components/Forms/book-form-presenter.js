import React, { Component } from "react";
import { styled } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

import Script from "react-load-script";

import Grow from "@material-ui/core/Grow";

const FormInput = styled(TextField)({
  width: "100%"
});

class BookFormPresenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      query: ""
    };
  }

  handleScriptLoad = () => {
    // Declare Options For Autocomplete
    var options = { types: ["(cities)"] };

    // Initialize Google Autocomplete
    /*global google*/
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      options
    );

    // Fire Event when a suggested name is selected
    this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
  };

  handlePlaceSelect = () => {
    // Extract City From Address Object
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;

    // Check if address is valid
    if (address) {
      //pass the updated form w/ auto-complete city back to booking-presenter(parent) to update state
      this.props.updateCity(
        address[0].long_name,
        addressObject.formatted_address
      );
    }
  };

  render() {
    const { formConfig, contactForm, errors } = this.props;
    return (
      <React.Fragment>
        <div id="map" style={{ width: 400, height: 300 }} />

        <Script
          url={`https://maps.googleapis.com/maps/api/js?key=${
            process.env.GOOGLE_MAPS
          }&libraries=places`}
          onLoad={this.handleScriptLoad}
        />

        <Grow in={this.props.showModal2}>
          <form
            style={{ position: "relative", textAlign: "center" }}
            noValidate
            autoComplete="off"
          >
            {/*NOTE : Material UI has an example in docs where they add value as a prop however, it will cause the label to
                        overlap the form input if you include a 'value' prop.
                        YOU WILL NEED TO SPECIFY A NAME prop though.

                        see : https://github.com/mui-org/material-ui/issues/5501
                    */}
            <div className={"row"}>
              <div className={"col"}>
                <FormInput
                  id="contactFirstName"
                  label="First Name"
                  name={"contactFirstName"}
                  onChange={this.props.handleFormFieldChange(
                    "contactFirstName"
                  )}
                  margin="normal"
                  variant="outlined"
                  error={errors.contactFirstName.error}
                />
                <p className={"err-msg-start"}>{errors.contactFirstName.msg}</p>
              </div>

              <div className={"col"}>
                <FormInput
                  id="contactLastName"
                  label="Last Name"
                  name={"contactLastName"}
                  onChange={this.props.handleFormFieldChange("contactLastName")}
                  margin="normal"
                  variant="outlined"
                  error={errors.contactLastName.error}
                />
                <p className={"err-msg-start"}>{errors.contactLastName.msg}</p>
              </div>
            </div>

            <div className={"row"}>
              <div className={"col"}>
                <FormInput
                  id="contactEmail"
                  label="Email"
                  name={"contactEmail"}
                  onChange={this.props.handleFormFieldChange("contactEmail")}
                  margin="normal"
                  variant="outlined"
                  error={errors.contactEmail.error}
                />
                <p className={"err-msg-start"}>{errors.contactEmail.msg}</p>
              </div>
            </div>

            <div className={"row"}>
              <div className={"col"}>
                <FormInput
                  id="contactPhone"
                  label="Phone"
                  name={"contactPhone"}
                  onChange={this.props.handleFormFieldChange("contactPhone")}
                  margin="normal"
                  variant="outlined"
                  error={errors.contactPhone.error}
                />
                <p className={"err-msg-start"}>{errors.contactPhone.msg}</p>
              </div>

              <div className={"col"}>
                <FormInput
                  id="autocomplete"
                  label="City"
                  name={"contactCity"}
                  onChange={this.props.handleFormFieldChange("contactCity")}
                  value={this.props.contactCity}
                  style={{ zIndex: 100 }}
                  // value={this.state.query}
                  margin="normal"
                  variant="outlined"
                  error={errors.contactCity.error}
                />
              </div>
            </div>

            <div className={"row"}>
              <div className={"col"}>
                <FormInput
                  id="outlined-contactCity"
                  label="Dog Name"
                  name={"dogName"}
                  onChange={this.props.handleFormFieldChange("dogName")}
                  margin="normal"
                  variant="outlined"
                />
                <p className={"err-msg-start"}>{""}</p>
              </div>
              <div className={"col"}>
                <FormInput
                  id="outlined-contactCity"
                  label="Breed"
                  name={"dogBreed"}
                  onChange={this.props.handleFormFieldChange("dogBreed")}
                  margin="normal"
                  variant="outlined"
                />
                <p className={"err-msg-start"}>{""}</p>
              </div>
              <div className={"col"}>
                <FormInput
                  id="outlined-contactCity"
                  label="Age"
                  name={"dogAge"}
                  onChange={this.props.handleFormFieldChange("dogAge")}
                  margin="normal"
                  variant="outlined"
                />
              </div>
              <p className={"err-msg-start"}>{""}</p>
            </div>

            {/*<div style={{border: '1px solid red'}}>*/}
            {/*<GooglePlacesAutocomplete*/}
            {/*onSelect={console.log}*/}
            {/*>*/}
            {/*</GooglePlacesAutocomplete>*/}
            {/*</div>*/}

            <div className={"row"}>
              <div className={"col"}>
                <TextField
                  placeholder="Questions or Comments"
                  multiline={true}
                  rows={3}
                  rowsMax={4}
                  variant="outlined"
                  onChange={this.props.handleFormFieldChange("comments")}
                />
              </div>
            </div>
          </form>
        </Grow>
      </React.Fragment>
    );
  }
}

export default BookFormPresenter;

BookFormPresenter.propTypes = {
  errors: PropTypes.object.isRequired,

  //Shows the Form Modal
  showModal2: PropTypes.bool.isRequired,

  //State from parent for form Input Fields
  contactForm: PropTypes.object.isRequired,

  //sets state in parent when form input is entered by user
  handleFormFieldChange: PropTypes.func.isRequired,

  //Updated Search Query
  updateCity: PropTypes.func.isRequired
};
