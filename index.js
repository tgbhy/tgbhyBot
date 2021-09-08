const { Collection, Client, Discord, MessageEmbed, Intents, Message } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_INVITES] });
const config = require('./Stockage/config.json');
const fs = require('fs');

module.exports = client;

client.commands = new Collection()
client.config = require('./Stockage/config.json')
client.prefix = client.config.prefix

require('./handler')(client);


client.login(config.token)