const { MessageEmbed } = require('discord.js');
const client = require('../index');

client.on('guildMemberAdd', messagge => {

    console.log('Le membre ' + messagge.user.username + ' à rejoint le serveur ' + messagge.guild.name)

    let embed = new MessageEmbed()
    .setTitle('Petit Nouveau')
    .setDescription('Souhaiter tous la bienvenue au membre ' + messagge.user)
    .setFooter('Nouveau membre | Par tgbhy#9566 |')

    client.guilds.cache.get(messagge.guild.id).channels.cache.find(channel >= channel.name == 'bienvenue' || channel.name == 'arrivés').send({content: `Souhaiter tous la bienvenue à ${messagge.user}`, embed: [embed]})
})