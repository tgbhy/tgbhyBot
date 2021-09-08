const Discord = require('discord.js');
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'regles',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        if (message.member.permissions.has('MANAGE_MESSAGES')) {
            let embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Les règles')
            .setDescription('Merci de respecter les règles, si vous ne respécter pas les règles vous vous vérrez sanctionné, les règles seront présenter de cette mannière: Les règles et en dessous les sanctions')
            .addField('Propos raciste/pornographique/raciste, sont interdit', 'Mute', true)
            .setAuthor('tgbhy')

            message.channel.send({embeds: [embed]})

        } else {
            message.channel.send('Vous n\'avez pas la permission d\'éxécuter cette commande !')
        }
    }
}