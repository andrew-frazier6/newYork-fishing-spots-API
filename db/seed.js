const data = require("../db/data/data.json");
const fishingSpot = require("../db/modules/fishingSpot");

const fishingSpot = data.map(item => {
  const fishingSpot = {};
  return fishingSpot;
});

fishingSpot.remove({}).then(() => {
  fishingSpot
    .create(fishingData)
    .then(fishingData => {
      console.log(fishingData);
    })
    .catch(err => {
      console.log(err);
    });
});
