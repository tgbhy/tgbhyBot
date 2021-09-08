const Discord = require('discord.js');
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'nuke',
    /**
     * @param {Client} = client
     * @param {Message} = message
     * @param {String[]} = args
     */
    run: async (client, message, args) => {
        if(message.member.permissions.has("MANAGE_MESSAGES") || message.author.id === message.guild.ownerID){
            let decompte = new Discord.MessageEmbed()
            .setColor("DARK_RED")
            .setTitle("Channel nuke in 3")

            message.channel.send({embeds: [decompte]}).then(décompte => {
                setTimeout(() => {
                    let decompte2 = new Discord.MessageEmbed()
                    .setColor("DARK_RED")
                    .setTitle("Channel nuke in 2")
                    décompte.edit({embeds: [decompte2]}).then(décompte2 => {
                        setTimeout(() => {
                            let decompte3 = new Discord.MessageEmbed()
                            .setColor("DARK_RED")
                            .setTitle("Channel nuke")
                            décompte2.edit({embeds: [decompte3]})
                            setTimeout(async () => {
                                let pos = message.channel.position
                                let cloned = await message.channel.clone()
                                message.channel.delete()
                                cloned.setPosition(pos)
                                let nuked = new Discord.MessageEmbed()
                                .setColor("GREEN")
                                .setTitle("Nuked")
                                .setDescription("Channel has been reset")
                                .setImage("https://cdn.discordapp.com/attachments/862723341386645525/862724528802496522/tenor.gif")
                                cloned.send({embeds: [nuked]})
                            
                            }, 250);
                        }, 1000);
                    })
                }, 1000);
            })
        }
        else{
            let perm = new Discord.MessageEmbed()
            .setColor("RED")
            .setFooter(`warn system | ${by} | `)
            .setTimestamp()
            .setTitle("You don't have permission !!!")
            .setDescription(":x: **Error:** You need permission \`MANAGE_MESSAGE\` for reset channel")
            message.channel.send({embeds: [perm]})
        }
    }
}