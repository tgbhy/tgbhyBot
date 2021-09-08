const { Client, Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const moment = require('moment');
const by = "by TKLT_CatChef#9999"

module.exports = {
    name: 'ping',
    /**
     * @param {Client} = client
     * @param {Message} = message
     * @param {String[]} = args
     */
    run: async (client, message, args) => {
        let ping = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Latency")
        .setDescription("**:ping_pong: Pong**")
        .addField("Votre latence : ", `${message.createdTimestamp - Date.now() } ms`)
        .addField("Latance du bot : ", `${client.ws.ping} ms`)
        .setFooter(`Système de ping | ${by} Modifié par tgbhy#9566 `)
        .setTimestamp()
        message.delete()
        message.channel.send({embeds: [ping]})
    }
}