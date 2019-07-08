const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  renderDates: [Schema.Types.Mixed], //dates selected by user from calendar

  contactFirstName: {
    type: String,
    required: true
  },

  contactLastName: {
    type: String,
    required: true
  },

  contactPhone: {
    type: String,
    required: true
  },

  contactEmail: {
    type: String,
    required: true
  },

  contactCity: {
    type: String,
    required: true
  },

  dogName: {
    type: String
  },

  dogBreed: {
    type: String
  },

  dogAge: {
    type: String
  },

  dogWeight: {
    type: String
  },

  comments: {},

  date: {
    type: Date,
    default: Date.now()
  } //timestamp
});

module.exports = Request = mongoose.model("requests", RequestSchema);
