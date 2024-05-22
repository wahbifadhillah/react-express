const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const { validateArticle } = require("../middleware/validation");

router.post("/", validateArticle, articleController.createArticle);
router.get("/:limit/:offset/:status", articleController.getAllArticlesWithStatus);
router.get("/:limit/:offset", articleController.getAllArticles);
router.get("/:id", articleController.readArticle);
router.patch("/:id", validateArticle, articleController.updateArticle);
router.delete("/:id", articleController.deleteArticle);

module.exports = router;
