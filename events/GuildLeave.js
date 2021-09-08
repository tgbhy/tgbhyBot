const client = require('../index');
const config = require('../Stockage/config.json');

client.on('guildMemberRemove', member => {

    console.log('Le membre ' + member.user.username + 'à quitté le serveur ' + member.guild.leave)

    client.guilds.cache.get('835853248812285982').channels.cache.get('835866339142533184').send('Dites au revoir à ' + member.user)


})