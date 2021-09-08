const client = require('../index');
const Discord = require('discord.js');
const config = require('../Stockage/config.json');

client.on('ready', client => {
    console.log(`${client.user.tag} is now online!`)

    let online = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("**STATUS**")
    .setDescription("Le bot est de nouveau en ligne !")
    .setFooter("Sytème Status bot | Par TKLT_CatChef#9999 modifié par tgbhy#9566 |")
    .setTimestamp()
    client.guilds.cache.get("835853248812285982").channels.cache.get("847113457790746625").send({embeds: [online]})

    let statut = [
        `${client.users.cache.size}  Utilisateurs`,
        `${client.channels.cache.size} Salons`,
        `${client.guilds.cache.size} Serveurs`,
        "Prefix : *"
    ]
    
    let i = 0
    setInterval(() => {
        client.user.setActivity(statut[i], {type: 'WATCHING'})
        i = ++i% statut.length
    }, 1e4);
})