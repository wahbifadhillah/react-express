const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sharingvision", "root", "wahbifadhillah", {
	host: "localhost",
	dialect: "mysql",
	pool: {
		max: 10,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
});

module.exports = sequelize;
