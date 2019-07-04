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
      contactCity
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

    //Create / Add request into mongoDB
    request = new Request(bookingFormFields);
    request.save();

    res.send(bookingFormFields);
  }
);

module.exports = router;
