const { SlashCommandBuilder } = require("@discordjs/builders");
const { Interaction, Client } = require("discord.js");

module.exports = {
	permissions: [],

	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Pong!"),
	
	/**
	 * @param {Interaction} interaction 
	 * @param {Client} client
	 */
	async execute(interaction, client) {
		await interaction.reply({ content: `Pong!\n> 🏓 **Latency:** \`${Date.now() - interaction.createdTimestamp}ms\``});
	}
}
