const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	permissions: [],

	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Pong!"),

	async execute(interaction, client) {
		await interaction.reply({ content: `Pong!\n> 🏓 **Latency:** \`${Date.now() - interaction.createdTimestamp}ms\``, ephemeral: false });
	}
}
