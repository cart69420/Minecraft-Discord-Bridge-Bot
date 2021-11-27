module.exports = {
    name: "playerJoined",
    execute(player, bot, client) {
        try {
            if(player.username == bot.username) return;
            
            const config = bot.config.minecraft.bridge;
            config.channels.forEach(channel => {
                let msg = config.formats.join.replace("%username", player.username);
                client.channels.cache.get(channel).send({embeds: [
                    {
                        color: config.color.join,
                        description: msg
                    }
                ]});
            });
        } catch (e) {
            console.log(e);
        }
    }
}