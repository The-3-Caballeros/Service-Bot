const { Permissions, Interaction, Client } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	permissions: [Permissions.FLAGS.ADMINISTRATOR],

	data: new SlashCommandBuilder()
		.setName("timeout")
		.setDescription("Timeout a user for a specified amount of time."),

	/**
	 * @param {Interaction} interaction 
	 * @param {Client} client
	 */
	async execute(interaction, client) {
	},
};
