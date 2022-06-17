module.exports = {
	data: {
		name: "links-github"
	},

	async execute(interaction, client) {
		await interaction.reply({ content: "**dood's GitHub: __https://github.com/itsamedood__**", ephemeral: true });
	}
}
