const express = require("express");
var cors = require("cors");
const router = express.Router();

//@ /api/booking/requests/test
router.get("/test", (req, res) => {
  res.json({ msg: "booking-requests route works" });
});

module.exports = router;
