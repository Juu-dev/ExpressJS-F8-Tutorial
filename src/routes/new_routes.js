import express from "express";
import newsController from "../app/controllers/NewController";

const router = express.Router();

router.use("/:slug", newsController.show);
router.use("/", newsController.index);

module.exports = router;
