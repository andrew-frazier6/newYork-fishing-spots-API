const mongoose = require("../connection");
const Schema = mongoose.Schema;

const fishingSpot = new Schema({});

module.exports = mongoose.model("fishingSpot", fishingSpot);
