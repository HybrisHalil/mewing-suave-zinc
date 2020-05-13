const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "-KoronaBot",
              icon_url: "https://i.hizliresim.com/7vM5Hd.jpg"
            },
			    "thumbnail": {
				 "url": "https://i.hizliresim.com/EyyG8z.png"
			},
            title: "Korona Bot Nedir ?",
            url: "",
            description: "Korona Bot Kolay İşlevli Korona Bilgi Bir Bottur .",
            fields: [
				
			  {
                name: "Türkçe Komutlar",
				inline: true,
                value: "-**korona**\n-**koronabilgi**\n-**korona-bilgi**\n-**virüs**\n-**bilgi**\n"
              },
              {
                name: "Other Commands",
				inline: true,
                value: "-**corona**\n-**coronainfo**\n-**corona-info**\n"
              },
              {
                name: "Güncel Sürüm",
                value: "v1.0 BETA"
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "https://i.hizliresim.com/7vM5Hd.jpg",
              text: "© KoronaBot 2020-2021  👑 | Halil#0504"
            }
          }
        });  
	    message.react("👍")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
