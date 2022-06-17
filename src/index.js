const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const stdio = require("./utils/stdio");
require("dotenv").config();

// Client stuff.
const client = new Client({ intents: 32767 });
client.commands = new Collection();

// Folders.
const functions = readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const events = readdirSync("./src/events").filter(file => file.endsWith(".event.js"));
const commandCategories = readdirSync("./src/commands").filter(folder => !folder.endsWith(".js")); // Commands are in subfolders.

(async () => {
	for (const file of functions) { require(`./functions/${file}`)(client); }
	client.handleEvents(events, `./src/events`);
	client.handleCommands(commandCategories, `./src/commands`);

	return client.login(process.env.TOKEN);
})();
