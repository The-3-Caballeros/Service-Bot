const { MessageEmbed } = require("discord.js");

class ServiceError {
	static async raise(lang, errorMessage, interaction) {
		const errorEmbed = new MessageEmbed()
			.setColor("#FF0000")
			.setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL() })
			.setTitle("Error:")
			.setDescription(`\`\`\`${lang}\n${errorMessage}\`\`\``);

		return await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
	}
}

module.exports = ServiceError;
