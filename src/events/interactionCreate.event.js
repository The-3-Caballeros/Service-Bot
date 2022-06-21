const { MessageEmbed, Interaction, Client } = require("discord.js");
const ServiceError = require("../utils/error");

module.exports = {
	name: "interactionCreate",
	once: false,

	/**
	 * @param {Interaction} interaction
	 * @param {Client} client
	 */
	async execute(interaction, client) {
		if (interaction.isCommand()) {
			const command = client.commands.get(interaction?.commandName);
			const perms = command?.permissions;

			if (!command) return;

			try {
				if (perms && perms.length > 0) {
					const missingPermsEmbed = new MessageEmbed()
						.setColor("#FF0000")
						.setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL() })
						.setTitle("Missing permissions!")
						.addField("Permissions:", `\`${perms.join(", ")}\``);

					const isOwner = interaction.member.id == interaction.guild.ownerId;

					if (!interaction.member.permissions.has(perms) && !isOwner) return await interaction.reply({ embeds: [missingPermsEmbed], ephemeral: true });
				}

				await command.execute(interaction, client);
			} catch (e) {
				await ServiceError.raise("js", e, interaction);
				console.error(e);
			}

		} else if (interaction.isSelectMenu()) {
			switch (interaction.customId) {
				case "test-select-menu":
					await interaction.reply({
						content: `You selected ${interaction.values[0]}`,
						ephemeral: true
					});
					break;
			}

		} else if (interaction.isButton()) {
			const button = client.buttons.get(interaction.customId);
			if (!button) return;

			try {
				await button.execute(interaction, client);
			} catch (e) {
				await ServiceError.raise("js", e, interaction);
				console.error(e);
			}
		}
	},
};
