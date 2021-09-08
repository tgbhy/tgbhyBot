const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'reactionrole',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */    
    run: async (client, message, args) => {
        if (message.member.permissions.has('MANAGE_MESSAGES')) {
            
            let role1 = message.guild.roles.cache.get(role => role.name('HTML'))
            let role2 = message.guild.roles.cache.get(role => role.name('CSS'))

            let emoji1 = '👌'
            let emoji2 = '😶'

            const embed = new MessageEmbed()
                .setTitle('Reaction Role')
                .setDescription('Cliquez sur la réaction correspondante pour avoir le role !')
                .addField(`${emoji1}`, `- ${role1}`, false)
                .addField(`${emoji2}`, `- ${role2}`, false)
            await message.channel.send({embed: [embed]})

            embedMessage.react(emoji1)
            embedMessage.react(emoji2)
        } else return message.reply('Vous n\'avez pas la permission d\'éxécuter cette commande')

    }
}