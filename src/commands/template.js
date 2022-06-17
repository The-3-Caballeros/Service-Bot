/* This file does not do anything, it is just a base for slash commands you can use for copy + paste. */

const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	permissions: [],

	data: new SlashCommandBuilder()
		.setName("CMD NAME")
		.setDescription("CMD DESCRIPTION."),

	async execute(interaction, client) {
		/* code here */
	},
};
