const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db")
const client = new Discord.Client()
const ayarlar = ("../conf/settings.js")
require('./util/eventLoader.js')(client)

var prefix = ayarlar.prefix

const log = message => {
  console.log(message);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./cmd/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length ? 'I have '+files.length+' commands':'I don\'t have any commands'}`);
  files.forEach(f => {
    let props = require(`./cmd/${f}`);
    log(`${props.help.name ? 'Loaded Command \''+props.help.name+'\'':'Command Info Not Found (Path : ./cmd/'+f+'):'}`);
    client.commands.set(props.help.name, props)
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./cmd/${command}`)];
      let cmd = require(`./cmd/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

//Command handler by rhing32

//-------------------------\\YUKARIYI ELLEME//-------------------------\\
//-------------------------\\KOMUTLAR AŞAĞIYA//-------------------------\\

client.on('message', message => {
  if (message.content.toLowerCase() === "sa")
  message.channel.send("as")
})


//-------------------------\\KOMUTLAR YUKARIYA//-------------------------\\
//-------------------------\\AŞAĞIYI ELLEME//-------------------------\\

//Command handler by rhing32

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./cmd/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./cmd/${command}`)];
      let cmd = require(`./cmd/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
client.elevation = message => {
  if(!message.guild) {
    return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.tester) permlvl = 4;
  return permlvl;
};
var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;/*
client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});*/
client.on('error', e => {
  console.log("Hata oldu amk: "+e);
});
client.login("ODA5MTA3NTgzMzA2MzAxNDgx.YCQSKA.8SPr9PV9vUkKD50bmoGoLc2wxoE")
const { promisify } = require('util')

client.config = require("./conf/settings")
client.logger = console
client.wait = promisify(setTimeout)
client.ayar = db

String.prototype.toProperCase = function() {
return this.replace(/([^\W_]+[^\s-]*) */g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

Array.prototype.random = function() {
return this[Math.floor(Math.random() * this.length)];
};

process.on("uncaughtException", (err) => {
const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
console.error("Uncaught Exception: ", errorMsg);
process.exit(1);
});

process.on("unhandledRejection", err => {
console.error("Uncaught Promise Error: ", err);
});


//Command handler by rhing32