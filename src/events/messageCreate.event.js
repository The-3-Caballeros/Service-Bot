const { Message, Client } = require("discord.js");

const skullChannel = "986371402737266719";
const countChannel = "908952488835678208";

module.exports = {
	name: 'messageCreate',
	once: false,
	/**
	 * @param {Message} message
	 * @param {Client} client
	*/
	async execute(message, client) {
		//╎⎓   (ᒲᒷᓭᓭᔑ⊣ᒷ.ᓵ𝙹リℸ ̣ᒷリℸ ̣   ==   'ʖᒷᔑリᓭ')   ᒲᒷᓭᓭᔑ⊣ᒷ.∷ᒷ!¡ꖎ\|\|('∴⍑ᔑℸ ̣   ℸ ̣⍑ᒷ   ⎓⚍ᓵꖌ');
		if (message.author.bot) return;

		if (message.content.startsWith(process.env["TOKEN"])) {
			const args = message.content.split(/ +/g).shift();
		} else {
			if (message.channel.id === skullChannel) {
				if (!message.content === "💀") message.delete();
			} else if (message.channel.id === countChannel) {
				const last_msg = await (await message.channel.messages.fetch({ limit: 2 })).map(m_content => m_content.content)[1];

				if (isNaN(Number(message.content))) message.delete();
				else if (Number(last_msg) > Number(message.content)) message.delete();
				else if (last_msg == message.content) message.delete();
			};
		};
	}
};



















// blurp.on('messageCreate', module.exports);
// blurp.on('guildCreate', module.exports);
// blurp.on('guildDelete', module.exports);
// blurp.on('guildMemberAdd', module.exports);
// blurp.on('guildMemberRemove', module.exports);
// blurp.on('guildMemberUpdate', module.exports);
// blurp.on('channelCreate', module.exports);
// blurp.on('channelDelete', module.exports);
// blurp.on('channelUpdate', module.exports);
// blurp.on('channelPinsUpdate', module.exports);
// blurp.on('messageDelete', module.exports);
// blurp.on('messageDeleteBulk', module.exports);
// blurp.on('messageUpdate', module.exports);
// blurp.on('presenceUpdate', module.exports);
// blurp.on('roleCreate', module.exports);
// blurp.on('roleDelete', module.exports);
// blurp.on('roleUpdate', module.exports);
// blurp.on('typingStart', module.exports);
// blurp.on('typingStop', module.exports);
// blurp.on('userUpdate', module.exports);
// blurp.on('voiceStateUpdate', module.exports);
// blurp.on('webhookUpdate', module.exports);
// blurp.on('messageReactionAdd', module.exports);
// blurp.on('messageReactionRemove', module.exports);
// blurp.on('messageReactionRemoveAll', module.exports);
// blurp.on('messageReactionRemoveEmoji', module.exports);
// blurp.on('userNoteUpdate', module.exports);
// blurp.on('userSettingsUpdate', module.exports);
// blurp.on('userGuildSettingsUpdate', module.exports);
// blurp.on('userChannelSettingsUpdate', module.exports);
// blurp.on('userRelationshipAdd', module.exports);
// blurp.on('userRelationshipRemove', module.exports);
// blurp.on('userRelationshipUpdate', module.exports);
// blurp.on('userGuildRelationshipAdd', module.exports);
// blurp.on('userGuildRelationshipRemove', module.exports);
// blurp.on('userGuildRelationshipUpdate', module.exports);
// blurp.on('userChannelRelationshipAdd', module.exports);
// blurp.on('userChannelRelationshipRemove', module.exports);
// blurp.on('userChannelRelationshipUpdate', module.exports);
// blurp.on('userGuildPresenceUpdate', module.exports);
// blurp.on('userChannelPresenceUpdate', module.exports);
// blurp.on('userRelationshipRemove', module.exports);
// blurp.on('userRelationshipUpdate', module.exports);
// blurp.on('userGuildRelationshipAdd', module.exports);
// blurp.on('userGuildRelationshipRemove', module.exports);
// blurp.on('userGuildRelationshipUpdate', module.exports);
// blurp.on('userChannelRelationshipAdd', module.exports);
// blurp.on('userChannelRelationshipRemove', module.exports);
// blurp.on('userChannelRelationshipUpdate', module.exports);
// blurp.on('userGuildPresenceUpdate', module.exports);
// blurp.on('userChannelPresenceUpdate', module.exports);
// blurp.on('userRelationshipRemove', module.exports);
// blurp.on('userRelationshipUpdate', module.exports);
// blurp.on('userGuildRelationshipAdd', module.exports);
// blurp.on('userGuildRelationshipRemove', module.exports);
// blurp.on('userGuildRelationshipUpdate', module.exports);
// blurp.on('userChannelRelationshipAdd', module.exports);
// blurp.on('userChannelRelationshipRemove', module.exports);
// blurp.on('userChannelRelationshipUpdate', module.exports);
// blurp.on('userGuildPresenceUpdate', module.exports);
// blurp.on('userChannelPresenceUpdate', module.exports);
// blurp.on('userRelationshipRemove', module.exports);
// blurp.on('userRelationshipUpdate', module.exports);
// blurp.on('userGuildRelationshipAdd', module.exports);
// blurp.on('userGuildRelationshipRemove', module.exports);
// blurp.on('userGuildRelationshipUpdate', module.exports);
// blurp.on('userChannelRelationshipAdd', module.exports);
// blurp.on('userChannelRelationshipRemove', module.exports);
// blurp.on('userChannelRelationshipUpdate', module.exports);
// blurp.on('userGuildPresenceUpdate', module.exports);
// blurp.on('userChannelPresenceUpdate', module.exports);
// blurp.on('userRelationshipRemove', module.exports);
// blurp.on('userRelationshipUpdate', module.exports);
// blurp.on('userGuildRelationshipAdd', module.exports);
// blurp.on('userGuildRelationshipRemove', module.exports);
// blurp.on('userGuildRelationshipUpdate', module.exports);
// blurp.on('userChannelRelationshipAdd', module.exports);
// blurp.on('userChannelRelationshipRemove', module.exports);
// blurp.on('userChannelRelationshipUpdate', module.exports);
// blurp.on('userGuildPresenceUpdate', module.exports);
// blurp.on('userChannelPresenceUpdate', module.exports);
// blurp.on('userRelationshipRemove', module.exports);
// blurp.on('userRelationshipUpdate', module.exports);
// blurp.on('userGuildRelationshipAdd', module.exports);
// blurp.on('userGuildRelationshipRemove', module.exports);
// blurp.on('userGuildRelationshipUpdate', module.exports);
// blurp.on('userChannelRelationshipAdd', module.exports);
// blurp.on('userChannelRelationshipRemove', module.exports);
// blurp.on('userChannelRelationshipUpdate', module.exports);
// blurp.on('userGuildPresenceUpdate', module.exports);
// blurp.on('userChannelPresenceUpdate', module.exports);
// blurp.on('userRelationshipRemove', module.exports);
// blurp.on('userRelationshipUpdate', module.exports);
// blurp.on('userGuildRelationshipAdd', module.exports);
// blurp.on('userGuildRelationshipRemove', module.exports);
// blurp.on('userGuildRelationshipUpdate', module.exports);
// blurp.on('userChannelRelationshipAdd', module.exports);
// blurp.on('userChannelRelationshipRemove', module.exports);
// blurp.on('userChannelRelationshipUpdate', module.exports);
// blurp.on('userGuildPresenceUpdate', module.exports);
// blurp.on('userChannelPresenceUpdate', module.exports);





















































































// if (guildDB.prefixes) {
// 	guildDB.prefixes.forEach((prefix) => {
// 		client.prefixes.push(prefix);
// 	});
// }

// let prefixes = client.prefixes.join('|') + '|';
// if (prefixes.length < 2) prefixes = '';

// const prefixRegex = new RegExp(`^((hey|heya|hello|hi|oi) (smb|there smb|simplemodbot|there simplemodbot)( (can|could) (you|ya))?( maybe| possibly| please)?)|^((${prefixes}<@\!\?911112976793215006>|smb|simplemodbot|\\\\)) *`, `i`);
// if (!prefixRegex.test(message.content)) return;
// if (message.content == `<@!${client.user.id}>`)
// 	return message.channel.send({
// 		embeds: [
// 			new Discord.MessageEmbed()
// 				.setTitle('It appears you mentioned me!')
// 				.setDescription(
// 					`Hello! I am SimpleModBot! An easy to use multipurpose bot.\n\nIf you wish to know my prefix, I have many, but the common ones are \`\\\` and mentioning me\nIf you have permission to manage guild then you cna change my prefixes\n\nIf you wish to know my commands type \`${client.prefix}help\`.`,
// 				)
// 				.setFooter({ text: 'Please invite me to your servers to help me grow!\nTheres a button on my profile ^-^' })
// 				.setImage('https://cdn.discordapp.com/attachments/885009693645344829/891421005082398750/simplemodbot.gif')
// 				.setTimestamp()
// 				.setColor('GREY'),
// 		],
// 	});

// const matchedPrefix = message.content.replace(prefixRegex, '').trim();
// let args = matchedPrefix.split(' ');
// if (!args[1]) args[1] = 'ENA';
// args = args.filter((e) => e);
// let commandName = args.shift().toLowerCase();