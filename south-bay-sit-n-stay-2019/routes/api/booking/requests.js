const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator/check");

const Request = require("../../../Models/Request");

//@ /api/booking/requests/test
router.get("/test", (req, res) => {
  res.json({ msg: "booking-requests route works" });
});

//@route    POST api/booking/requests/book-now
//@desc     Submits customer and dog info when user completes the booking form provided by the calendar
//@access public

router.post(
  "/book-now",
  [
    check("contactFirstName", "First name is required.")
      .not()
      .isEmpty(),

    check("contactLastName", "Last name is required.")
      .not()
      .isEmpty(),

    check("contactPhone", "Please give a valid phone number.").isMobilePhone(),

    check("contactEmail", " Please include a valid email").isEmail(),

    check("contactCity", "A city is required.")
      .not()
      .isEmpty()
  ],

  async (req, res) => {
    const {
      contactFirstName,
      contactLastName,
      contactPhone,
      contactEmail,
      contactCity,
      dogName,
      dogBreed,
      dogAge,
      dogWeight,
      comments,
      renderDates
    } = req.body;
    let request;

    const bookingFormFields = { stockMsg: "I'm about to go to the db" }; //fill this obj with all fields that pass validation
    const errors = validationResult(req); //validation errors

    //if there are errors...
    if (!errors.isEmpty()) {
      //send back the error msg's with .array() method
      return res.status(400).json({ errors: errors.array() });
    }

    //if no errors...
    if (contactFirstName) bookingFormFields.contactFirstName = contactFirstName;
    if (contactLastName) bookingFormFields.contactLastName = contactLastName;
    if (contactPhone) bookingFormFields.contactPhone = contactPhone;
    if (contactEmail) bookingFormFields.contactEmail = contactEmail;
    if (contactCity) bookingFormFields.contactCity = contactCity;
    if (dogName) bookingFormFields.dogName = dogName;
    if (dogBreed) bookingFormFields.dogBreed = dogBreed;
    if (dogAge) bookingFormFields.dogAge = dogAge;
    if (dogWeight) bookingFormFields.dogWeight = dogWeight;
    if (comments) bookingFormFields.comments = comments;
    if (renderDates) bookingFormFields.renderDates = renderDates;

    //uncomment for debugging
    console.log("THIS IS WHAT WILL GO TO THE DB", req.body);

    //Create / Add request into mongoDB
    request = new Request(bookingFormFields);
    request.save();

    res.status(200).send("Success");
  }
);

module.exports = router;
