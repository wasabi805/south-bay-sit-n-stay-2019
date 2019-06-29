import React  from "react";
import { styled } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

import Grow from "@material-ui/core/Grow";

const FormInput = styled(TextField)({
  width: "100%"
});

const BookFormPresenter = props => {
  const { formConfig, contactForm, errors } = props;

  console.log(errors, "IM IN BOOK FORM");
  return (
    <Grow in={props.showModal2}>
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
              onChange={props.handleFormFieldChange("contactFirstName")}
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
              onChange={props.handleFormFieldChange("contactLastName")}
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
              onChange={props.handleFormFieldChange("contactEmail")}
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
              onChange={props.handleFormFieldChange("contactPhone")}
              margin="normal"
              variant="outlined"
              error={errors.contactPhone.error}
            />
            <p className={"err-msg-start"}>{errors.contactPhone.msg}</p>
          </div>

          <div className={"col"}>
            <FormInput
              id="contactCity"
              label="City"
              name={"contactCity"}
              onChange={props.handleFormFieldChange("contactCity")}
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
              onChange={props.handleFormFieldChange("dogName")}
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
              onChange={props.handleFormFieldChange("dogBreed")}
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
              onChange={props.handleFormFieldChange("dogAge")}
              margin="normal"
              variant="outlined"
            />
          </div>
          <p className={"err-msg-start"}>{""}</p>
        </div>

        <div className={"row"}>
          <div className={"col"}>
            <TextField
              placeholder="Questions or Comments"
              multiline={true}
              rows={3}
              rowsMax={4}
              variant="outlined"
            />
          </div>
        </div>
      </form>
    </Grow>
  );
};

export default BookFormPresenter;

BookFormPresenter.propTypes = {
  //Shows the Form Modal
  showModal2: PropTypes.bool.isRequired,

  //State from parent for form Input Fields
  contactForm: PropTypes.object.isRequired,

  //sets state in parent when form input is entered by user
  handleFormFieldChange: PropTypes.func.isRequired
};
