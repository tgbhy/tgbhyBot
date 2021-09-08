const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ban',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        if (message.member.permissions.has('BAN_MEMBERS')) {
            
            const text = message.mentions.members.first()

            if (!text) return message.channel.send('Merci de mentionner la personne à bannir !')
            if (text.permissions.has('BAN_MEMBERS')) return message.channel.send('Vous ne pouvez pas bannir cette personne !')
            text.ban().then((member) => {
                message.channel.send('Le membre ' + member.displayName + ' à correctement été bannie !')
            }).catch(() => {
                message.channel.send('Je ne peut pas faire ceci !')
            })

        } else {
            message.channel.send('Vous n\'avez pas la permission d\'éxécuter cette commande !')
        }
    }
}