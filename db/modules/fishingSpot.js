const mongoose = require("../connection");
const Schema = mongoose.Schema;

const fishingSpot = new Schema({
  name: String,
  fish_types: [String],
  county: String,
  public_access: String,
  location: Object
});

module.exports = mongoose.model("fishingSpot", fishingSpot);
