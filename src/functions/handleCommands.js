const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { readdirSync } = require("fs");
const stdio = require("../utils/stdio");

const clientId = "938501061281472513";
const guildId = "832099706120831006";

module.exports = (client) => {
	client.handleCommands = async (commandFolders, path) => {
		client.commandArray = [];

		for (const folder of commandFolders) {
			const commandFiles = readdirSync(`${path}/${folder}`).filter(file => file.endsWith(".cmd.js"));

			for (const file of commandFiles) {
				const command = require(`../commands/${folder}/${file}`);

				client.commands.set(command.data.name, command);
				client.commandArray.push(command.data.toJSON());
			}
		}

		const rest = new REST({
			version: '9'
		}).setToken(process.env.TOKEN);

		(async () => {
			try {
				stdio.out.write(`/st_bold//fg_cyan/Refreshing application commands.../st_reset/`);

				await rest.put(
					Routes.applicationGuildCommands(clientId, guildId), {
					body: client.commandArray
				}
				);
			} catch (e) {
				console.error(e);
			}
		})();
	}
};
