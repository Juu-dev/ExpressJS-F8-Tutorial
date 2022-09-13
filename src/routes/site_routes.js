const express = require("express");
const siteControllers = require("../app/controllers/SiteController");

const router = express.Router();

router.use("/search", siteControllers.search);
router.use("/", siteControllers.home);

module.exports = router;
