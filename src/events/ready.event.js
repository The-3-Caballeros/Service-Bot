const stdio = require("../utils/stdio");
const { Client } = require("discord.js");

module.exports = {
	name: "ready",
	once: true,

	/**
	 * @param {Client} client 
	 */
	async execute(client) {
		stdio.out.write(`/st_bold//fg_magenta/${client.user.tag} is ready!/st_reset/`);

		await client.user.setPresence({
			activities: [{ name: "hotel service!", type: "STREAMING", url: "https://twitch.tv/itsamedood" }], status: "dnd"
		});
	},
};
