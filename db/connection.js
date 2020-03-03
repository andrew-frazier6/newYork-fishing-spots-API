const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ny_fishing_spots", {
  useNewUrlParser: true
});

module.exports = mongoose;
