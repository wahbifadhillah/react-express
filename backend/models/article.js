const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Article = sequelize.define(
	"posts",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		title: {
			type: DataTypes.STRING(200),
			allowNull: false,
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		category: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		created_date: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
		},
		updated_date: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
		},
		status: {
			type: DataTypes.ENUM("publish", "draft", "thrash"),
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
);

module.exports = Article;
