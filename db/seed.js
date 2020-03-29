const data = require("../db/data/data.json");
const fishingSpots = require("../db/models/fishingSpot");

const fishData = data.map(item => {
  const fishingSpots = {};
  (fishingSpots.name = item.name),
    (fishingSpots.fish_types = item.fish_spec),
    (fishingSpots.public_access = item.public_acc),
    (fishingSpots.county = item.county),
    (fishingSpots.location = item.location),
    (fishingSpots.map = item.site_wl);
  return fishingSpots;
});

fishingSpots.deleteMany({}).then(() => {
  fishingSpots
    .create(fishData)
    .then(fishingData => {
      console.log(fishingData);
    })
    .catch(err => {
      console.log(err);
    });
});
