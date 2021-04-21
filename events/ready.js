const Discord = require("discord.js")
const ayarlar = require("../conf/settings.js")

module.exports = async client => {

    console.log(`Loaded!`)
    console.log("I started!")
    console.log(`Coding by Atria and Rhing.`)
    client.user.setStatus("idle")
    client.user.setActivity("Coding by atria and Rhing.")

}