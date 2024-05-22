const { body, validationResult } = require("express-validator");

exports.validateArticle = [
	body("title").notEmpty().withMessage("Title harus ada!").isLength({ min: 20 }).withMessage("Title minimal 20 karakter"),
	body("content").notEmpty().withMessage("Content harus ada!").isLength({ min: 200 }).withMessage("Content minimal 200 karakter"),
	body("category").notEmpty().withMessage("Category harus ada!").isLength({ min: 3 }).withMessage("Category minimal 3 karakter"),
	body("status").notEmpty().withMessage("Status harus ada!").isIn(["publish", "draft", "thrash"]).withMessage("Status tidak valid: publish || draft || thrash"),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		next();
	},
];
