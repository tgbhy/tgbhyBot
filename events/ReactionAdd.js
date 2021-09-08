const client = require('../index');
const config = require('../Stockage/ticket.json')
const channelId = config.ticketchannel

client.on('messageReactionAdd', (reaction, user) => {
    if (user.bot) return

    const { message } = reaction
    if (message.channel.id === channelId) {
        message.delete()
    }
})