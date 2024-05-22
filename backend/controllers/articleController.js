const Article = require("../models/article");

exports.createArticle = async (req, res, next) => {
	try {
		const article = await Article.create(req.body);
		res.status(201).json({});
	} catch (err) {
		next(err);
	}
};

exports.readArticle = async (req, res, next) => {
	const { id } = req.params;
	try {
		const article = await Article.findByPk(id);
		if (article) {
			res.status(201).json(article);
		} else {
			res.status(404).json({ error: "Article not found" });
		}
	} catch (err) {
		next(err);
	}
};

exports.getAllArticles = async (req, res, next) => {
	try {
		const limit = parseInt(req.params.limit) || 10;
		const offset = parseInt(req.params.offset) || 0;
		const articles = await Article.findAll({
			limit,
			offset,
		});

		if (articles) {
			res.status(200).json(articles);
		} else {
			res.status(404).json({ error: "No articles found" });
		}
	} catch (err) {
		next(err);
	}
};

exports.updateArticle = async (req, res, next) => {
	const { id } = req.params;
	try {
		const article = await Article.findByPk(id);
		if (!article) {
			return res.status(404).json({ error: "Article not found" });
		}

		await article.update(req.body);

		res.status(200).json({});
	} catch (err) {
		next(err);
	}
};

exports.deleteArticle = async (req, res, next) => {
	const { id } = req.params;
	try {
		const article = await Article.findByPk(id);
		if (!article) {
			return res.status(404).json({ error: "Article not found" });
		}

		await article.destroy();

		res.status(204).end();
	} catch (err) {
		next(err);
	}
};
