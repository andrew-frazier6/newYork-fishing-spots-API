const fishingSpot = require("../modules/fishingSpot");
module.exports = {
  index: (req, res) => {
    fishingSpot.find({}).then(fishingSpot => {
      res.json(fishingSpot);
    });
  },
  showFish: (req, res) => {
    fishingSpot
      .find({ fish_types: req.params.fish_types })
      .then(fishingSpot => {
        res.json(fishingSpot);
      });
  },
  showName: (req, res) => {
    fishingSpot.find({ name: req.params.name }).then(fishingSpot => {
      res.json(fishingSpot);
    });
  },
  showAccess: (req, res) => {
    fishingSpot
      .find({ public_access: req.params.public_access })
      .then(fishingSpot => {
        res.json(fishingSpot);
      });
  },
  showLocation: (req, res) => {
    fishingSpot.find({ location: req.params.location }).then(fishingSpot => {
      res.json(fishingSpot);
    });
  },
  create: (req, res) => {
    fishingSpot.create(req.body).then(fishingSpot => {
      res.json(fishingSpot);
    });
  }
};
