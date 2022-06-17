module.exports = {
	data: {
		name: "links-twitch"
	},

	async execute(interaction, client) {
		await interaction.reply({ content: "**dood's Twitch: __https://twitch.tv/itsamedood__**", ephemeral: true });
	}
}
