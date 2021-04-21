const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")

/*
* Coding by Atria
* Atria industries 2021
*/


exports.run = async function(client, message, args) {
 
const embed = new MessageEmbed()
.setTitle(`${client.user.username}`)
.setDescription("calisiyom abi")
.setFooter(`Atria industries - 2021`, message.author.avatarURL())
message.channel.send(embed)
}


exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'test',
};