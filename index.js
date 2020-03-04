const express = require("express");
const app = express();
const fishingSpot = require("./db/modules/fishingSpot");

app.get("/", function(req, res) {
  fishingSpot.find({}).then(fishingData => res.json(fishingData));
});
app.listen(3000, () => console.log("listening on port 3000"));
