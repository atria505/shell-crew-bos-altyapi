const fs = require('fs')
const request = require('request')
const Discord = require('discord.js')
const db = require("quick.db")
const ayarlar = require("../conf/settings.js")


//////////////////////////////////////////
module.exports = async message => {
 var client = message.client
var prefix = ayarlar.prefix
 if(message.author.bot) return false
  
  if(message.author.id === client.user.id) return;

  if (message.author.bot) return;
  if (!message.content.toLowerCase().startsWith(ayarlar.prefix)) return;
  let command = message.content.toLowerCase().split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let args = message.content.split(" ").slice(2);
  let cmd;  
  if (client.commands.has(command)) {  
      if(message.channel.type === "dm") return message.channel.send('Özel mesajda komut kullanmazsın')
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    
        let süre = 4000
   
let kontrol = await db.fetch(`atria_${message.author.id}`)
if(süre - (Date.now() - kontrol) > 0) return message.reply("Bu komutu 4 saniyede bir kullanabilirsin")
    
  cmd.run(client, message, params, perms,  args);
}
  };

//Coding '  δ Rhîng ❅#0001