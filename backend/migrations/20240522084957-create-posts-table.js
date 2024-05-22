"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("posts", {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			title: {
				type: Sequelize.STRING(200),
				allowNull: false,
			},
			content: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			category: {
				type: Sequelize.STRING(100),
				allowNull: false,
			},
			created_date: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW,
			},
			updated_date: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW,
			},
			status: {
				type: Sequelize.ENUM("publish", "draft", "thrash"),
				allowNull: false,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("posts");
	},
};
