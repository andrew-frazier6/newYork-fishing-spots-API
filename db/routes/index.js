const express = require("express");
var router = express.Router();

router.use("/", require("./fishRoutes"));

module.exports = router;
