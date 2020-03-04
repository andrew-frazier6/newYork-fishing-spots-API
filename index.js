const express = require("express");
const app = express();
const fishingSpot = require("./db/modules/fishingSpot");

app.get("/", function(req, res) {
  fishingSpot.find({}).then(fishingData => res.json(fishingData));
});
app.get("/name", function(req, res) {
  fishingSpot.find({ name: req.params.name }).then(fishingSpot => {
    res.json(fishingSpot);
  });
});

//   (fishingSpots.name = item.name),
//     (fishingSpots.fish_types = item.fish_spec),
//     (fishingSpots.public_access = item.public_acc),
//     (fishingSpots.location = item.location);

app.listen(3000, () => console.log("listening on port 3000"));
