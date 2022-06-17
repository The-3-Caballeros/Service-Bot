module.exports = {
	data: {
		name: "links-twitter"
	},

	async execute(interaction, client) {
		await interaction.reply({ content: "**dood's Twitter: __https://twitter.com/itsamedood__**", ephemeral: true });
	}
}
