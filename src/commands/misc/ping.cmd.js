const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	ownerOnly: false,

	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Pong!"),

	async execute(interaction, client) {
		interaction.reply({ content: `Pong!\n> 🏓 **Latency:** \`${Date.now() - interaction.createdTimestamp}ms\``, ephemeral: false });
	}
}
