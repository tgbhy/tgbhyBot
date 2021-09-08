const { Client, Message, MessageEmbed } = require('discord.js');
const min = require('../../functions/time');

module.exports = {
    name: 'test',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if (message.member.permissions.has('MANAGE_MESSAGES')) {
            let test = min(10)
            console.log(`La fonction à très bien fonctionné et a retourné ${test}`);
            message.reply('Regarder la console pour savoir si sa a fonctionné !')
        }
    }
}