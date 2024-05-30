require('dotenv').config({path: '../.env.local'})
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
	host: process.env.DATABASE_HOST,
	dialect: process.env.DATABASE_DIALECT,
	pool: {
		max: 10,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
});

module.exports = sequelize;
console.log(process.env.DATABASE_DIALECT)