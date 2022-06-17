/* This file does not do anything, it is just a base for slash commands you can use for copy + paste. */

const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	ownerOnly: false,

	data: new SlashCommandBuilder()
		.setName("CMD NAME")
		.setDescription("CMD DESCRIPTION."),

	async execute(interaction, client) {
		/* code here */
	},
};
