const client = require('../index');

client.on("interaction", interact => {
    if(interact.isButton())
    if(interact.channel === ticket){
        if(interact.customId === "close"){
            let why = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle("Close ticket ?")
            .setDescription("Why you want close ticket ?")
            interact.message.delete()

            ticket.send({embeds: [why]}).then(whym => {
                client.on("message", messages => {
                    if(messages.channel === ticket){
                    if(messages.author.id === "740539838263984228") return
                    else{
                        let args = messages.content.split(" ")
                        let closed = new Discord.MessageEmbed()
                        .setColor("ORANGE")
                        .setTitle("Ticket closed")
                        .setDescription(`Your ticket in ${messages.guild.name} has been delete. Ticket deleted for ${args.slice(0).join(" ")} `)
                        message.member.send({embeds: [closed]})
                        ticket.setName(`closed-${message.author.username}`)
                        ticket.permissionOverwrites.set([{
                            id: everyone.id,
                            deny: ["VIEW_CHANNEL"]
                        }])
                        ticket.send("Ticket delete in 30 secondes").then(final => {
                           
                            setTimeout(() => {
                                ticket.delete()
                            }, 30000);
                        })

                    }
                }
                else{
                    return;
                }
                })
            })
        }
    }
})