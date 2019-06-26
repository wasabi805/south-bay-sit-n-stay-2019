require("dotenv").config();
var path = require("path");
const express = require("express");
var cors = require("cors");
const router = express.Router();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

//ROUTES
const bookingRequests = require("./routes/api/booking/requests");

//MiddleWare
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, this is the 1st, server route");
});

//Pass into connect() to access mongoDB
const mongoConfig = {
  mongoURI: process.env.mongoURI,
  config: {
    useNewUrlParser: true
  }
};
const { mongoURI, config } = mongoConfig;
mongoose
  .connect(mongoURI, config)
  .then(() => {
    console.log("mongodb connect!");
  })
  .catch(err => {
    console.log(err);
  });

//USE ROUTES
app.use("/api/booking/requests", bookingRequests);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
