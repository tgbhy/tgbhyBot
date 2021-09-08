const { Client, Message, MessageEmbed } = require('discord.js');
const { SaveTicketConfig } = require('../../functions/saveconfig')
const config = require('../../Stockage/ticket.json')

module.exports = {
  name: 'ticket',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {

        let everyone = message.guild.roles.cache.find(roles => roles.name === "@everyone")
        let ticket = await message.guild.channels.create(`ticket-${message.author.username}`, {
          'type': 'GUILD_TEXT',
          'parent': config.category
        })

        let ticketID = ticket.id

        config[listTicket][ticket1] = ticketID

        SaveTicketConfig();

        ticket.permissionOverwrites.set([{
            id: everyone.id,
            deny: ["VIEW_CHANNEL"]
        },{
            id: message.author.id,
            allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY", ]
        }, {
            id: config.autoriseroleID.role1,
            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY']
        }, {
          id: config.autoriseroleID.role2,
          allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY']
        }])
        let opened = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("Ticket")
        .setDescription(`Welcome in your ticket <@${message.author.id}>. \n For close ticket click on button bellow.`)
        let close = new MessageActionRow()
        .addComponents(
        new MessageButton()
        .setCustomId("close")
        .setStyle("SECONDARY")
        .setLabel("Close ticket ?"),
        );
        ticket.send({embeds: [opened], components: [close]})
        client.on("interaction", interact => {
            if(interact.isButton())
            if(interact.channel === ticket){
                if(interact.customId === "close"){
                  let why = new Discord.MessageEmbed()
                  .setColor("GREEN")
                  .setTitle("Close ticket ?")
                  .setDescription("Why you want close ticket ?")
                  interact.message.delete()
                  
                  let data = config[listTicket]

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
      }
    }
  
    /* 
    if(message.content.startsWith(bdd[message.guild.id]["prefix"] + "ticket")){
    */