// const Example = require("../models/example");

// exports.createArticle = async (req, res, next) => {
// 	try {
// 		const example = await Example.create(req.body);
// 		res.status(201).json({});
// 	} catch (err) {
// 		next(err);
// 	}
// };

// exports.readArticle = async (req, res, next) => {
// 	const { id } = req.params;
// 	try {
// 		const example = await Example.findByPk(id);
// 		if (example) {
// 			res.status(201).json(example);
// 		} else {
// 			res.status(404).json({ error: "Example not found" });
// 		}
// 	} catch (err) {
// 		next(err);
// 	}
// };

// exports.getAllArticles = async (req, res, next) => {
// 	try {
// 		const limit = parseInt(req.params.limit) || 10;
// 		const offset = parseInt(req.params.offset) || 0;
// 		const articles = await Example.findAll({
// 			limit,
// 			offset,
// 		});

// 		if (articles) {
// 			res.status(200).json(articles);
// 		} else {
// 			res.status(404).json({ error: "No articles found" });
// 		}
// 	} catch (err) {
// 		next(err);
// 	}
// };

// exports.getAllArticlesWithStatus = async (req, res, next) => {
// 	try {
// 		const limit = parseInt(req.params.limit) || 10;
// 		const offset = parseInt(req.params.offset) || 0;
// 		const articles = await Example.findAll({
// 			limit,
// 			offset,
// 			where: {
// 				status: req.params.status
// 			}
// 		});
// 		const totalPublished = await Example.count({
//             where: { status: 'publish' } 
//         });
// 		if (articles) {
// 			res.status(200).json({data: articles, total: totalPublished});
// 		} else {
// 			res.status(404).json({ error: "No articles found" });
// 		}
// 	} catch (err) {
// 		next(err);
// 	}
// };

// exports.updateArticle = async (req, res, next) => {
// 	const { id } = req.params;
// 	try {
// 		const example = await Example.findByPk(id);
// 		if (!example) {
// 			return res.status(404).json({ error: "Example not found" });
// 		}

// 		await example.update(req.body);

// 		res.status(200).json({});
// 	} catch (err) {
// 		next(err);
// 	}
// };

// exports.deleteArticle = async (req, res, next) => {
// 	const { id } = req.params;
// 	try {
// 		const example = await Example.findByPk(id);
// 		if (!example) {
// 			return res.status(404).json({ error: "Example not found" });
// 		}

// 		await example.destroy();

// 		res.status(204).end();
// 	} catch (err) {
// 		next(err);
// 	}
// };
