const express = require("express");
const app = express();
const fishingSpot = require("./db/modules/fishingSpot");

app.get("/", function(req, res) {
  fishingSpot.find({}).then(fishingData => res.json(fishingData));
});
app.get("/public_access/:public_access", function(req, res) {
  fishingSpot
    .find({ public_access: req.params.public_access })
    .then(fishingSpot => {
      res.json(fishingSpot);
    });
});
app.get("/fish_types/:fish_types", function(req, res) {
  fishingSpot.find({ fish_types: req.params.fish_types }).then(fishingSpot => {
    res.json(fishingSpot);
  });
});
app.get("/county/:county", function(req, res) {
  fishingSpot.find({ county: req.params.county }).then(fishingSpot => {
    res.json(fishingSpot);
  });
});
app.get("/map/:map", function(req, res) {
  fishingSpot.find({ public_map: req.params.public_map }).then(fishingSpot => {
    res.json(fishingSpot);
  });
});

app.listen(3000, () => console.log("listening on port 3000"));

// set conditional for get request and for seeding so that both are set
// to lower case
