const express = require("express");
const fishController = require("../controller/fishController");
var router = express.Router();

router.get("/", fishController.index);
router.get("/:name/fish_types", fishController.showFish);
router.get("/:name", fishController.showName);
router.get("/:name/access", fishController.showAccess);
router.get("/:name/location", fishController.showLocation);
router.get("/", fishController.create);

module.exports = router;
