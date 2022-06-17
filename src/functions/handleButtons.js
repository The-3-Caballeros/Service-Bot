const { readdirSync } = require("fs");

module.exports = (client) => {
	client.handleButtons = async () => {
		const buttonFolders = readdirSync("./src/buttons");

		for (const folder of buttonFolders) {
			const buttonFiles = readdirSync(`./src/buttons/${folder}`).filter(file => file.endsWith(".butn.js"));

			for (const file of buttonFiles) {
				const button = require(`../buttons/${folder}/${file}`);
				client.buttons.set(button.data.name, button);
			}
		}
	}
}
