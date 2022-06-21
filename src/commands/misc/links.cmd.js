const { MessageActionRow, MessageButton, Interaction, Client } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	permissions: [],

	data: new SlashCommandBuilder()
		.setName("links")
		.setDescription("Lists all of dood's links!"),

	/**
	 * @param {Interaction} interaction 
	 * @param {Client} client
	 */
	async execute(interaction, client) {
		const buttons = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId("links-twitch")
					.setLabel("Twitch")
					.setStyle("PRIMARY"),

				new MessageButton()
					.setCustomId("links-twitter")
					.setLabel("Twitter")
					.setStyle("SUCCESS"),

				new MessageButton()
					.setCustomId("links-github")
					.setLabel("GitHub")
					.setStyle("DANGER")
			);

		await interaction.reply({ content: "**dood's Links!**", components: [buttons], ephemeral: false });
	},
};
