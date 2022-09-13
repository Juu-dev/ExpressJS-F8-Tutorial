import express from "express";
import siteControllers from "../app/controllers/SiteController";

const router = express.Router();

router.use("/search", newsController.search);
router.use("/", newsController.home);

module.exports = router;
