const stdio = require("../utils/stdio");

module.exports = {
	name: "ready",
	once: true,
	async execute(client) {
		stdio.out.write(`/st_bold//fg_magenta/${client.user.tag} is ready!/st_reset/`);
	},
};
