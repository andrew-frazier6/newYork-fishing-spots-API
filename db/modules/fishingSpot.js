const mongoose = require("../connection");
const Schema = mongoose.Schema;

const fishingSpot = new Schema({
  name: String,
  fish_types: String
});

module.exports = mongoose.model("fishingSpot", fishingSpot);
