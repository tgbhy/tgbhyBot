const client = require('../index');
const config = require('../Stockage/config.json')

client.on("messageCreate", async (message) => {
    if (message.author.bot || !message.guild) return

    if (message.content.toLowerCase() ===  config.prefix + 'deploy' && message.author.id === client.application?.owner.id) {
        const data = {
            name: 'ping',
            description: 'Replies with pong !'
        };

        const slashcommand = await client.guilds.cache.get('835853248812285982').commands.create(data);
        console.log(slashcommand);
    }

    const [cmd, ...args] = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(" ");

    const command = client.commands.get(cmd)
    await command.run(client, message, args)
    console.log(`La commande ${cmd} à été éxécuter par ${message.member.user.username}!`)
    let logschannel = message.guild.channels.cache.find(c => c.name('logs-tgbhy-bot'))

    if(!logschannel) {
        let channel = await message.guild.channels.create('logs-tgbhy', {
            'type': 'GUILD_TEXT'
        })

        let everyone = message.guild.roles.cache.find(role => role.name === '@everyone')
        channel.permissionOverwrites.set([{
            id: everyone.id,
            deny: ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY', 'SEND_MESSAGES']
        }])

        channel.send(`La commande ${cmd} à été éxécuter par ${message.member.user.username}`)

    }
})