const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
    unique: true,
  },
  Url: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  links: [{ type: String }],
});

// Model
const googles = mongoose.model("googles", productSchema);

module.exports = googles;
