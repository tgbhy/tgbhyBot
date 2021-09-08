const client = require('../index');
const Discord = require('discord.js');

client.on('guildCreate', (guild) => {
    let embed = new Discord.MessageEmbed()
    .setTitle('Ajout du bot: ' + client.user.tag)
    .setDescription('Je suis un bot privée, donc certaine commmande ne fonctionneras pas sur votre serveur sauf si votre serveur est le serveur bot ou le serveur exprès !')
    if (guild.systemChannel) {
        guild.systemChannel.send({embed: [embed]})
    }    
})