const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'say',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        if (message.member.permissions.has('MANAGE_MESSAGES')) {
        const text = args.slice(0).join(' ')
        if (!text) return message.channel.send({ content: 'Donner moi quelque chose a dire !' })
        message.channel.send({ content: `${text}` })
        } else {
            message.channel.send({ content: 'Vous n\'avez pas la permission d\'éxécuter cette commande !' })
        }
    } 
} // Now lets test this command