const { MessageEmbed, Interaction, Client } = require("discord.js")
const { SlashCommandBuilder } = require("@discordjs/builders");
const { createHash } = require("crypto");

module.exports = {
	permissions: [],

	data: new SlashCommandBuilder()
		.setName("hash")
		.setDescription("Hash a string using SHA256.")
		.addStringOption(str =>
			str
				.setName("text")
				.setDescription("The text to hash.")
				.setRequired(true)
		),

	/**
	 * @param {Interaction} interaction 
	 * @param {Client} client
	 */
	async execute(interaction, client) {
		const text = interaction.options.getString("text")
		const output = createHash("sha256").update(text).digest("hex")

		const outputEmbed = new MessageEmbed()
			.setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL() })
			.setTitle("Output:")
			.addFields(
				{
					name: "Text",
					value: `${text}`,
					inline: true
				},
				{ name: "\u200b", value: "\u200b", inline: true }, // Empty gap.
				{
					name: "Hash",
					value: `\`\`\`txt\n${output}\`\`\``,
					inline: true
				}
			);

		await interaction.reply({ embeds: [outputEmbed], ephemeral: false });
	}
}
