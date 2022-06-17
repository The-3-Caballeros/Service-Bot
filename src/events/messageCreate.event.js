const skullChannel = "986371402737266719";
let curId;

module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(message, client) {
		if (message.author.bot) return;

		if (message.content.startsWith(process.env.PREFIX)) {
			const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);

			// Do message command stuff.
		} else if (message.channel.id == skullChannel)
			if (message.content != "💀" || message.author.id == curId) message.delete();
			else curId = message.author.id;
	},
};
