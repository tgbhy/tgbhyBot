const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./index.js', { token: 'token' });
manager.on('shardCreate', shard => console.log(`shard ${shard.id} démarré avec succès`));

manager.spawn();