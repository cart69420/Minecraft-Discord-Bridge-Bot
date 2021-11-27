module.exports = {
    name: "playerLeft",
    execute(player, bot, client) {
        try {
            if(player.username == bot.username) return;
            
            const config = bot.config.minecraft.bridge;
            config.channels.forEach(channel => {
                let msg = config.formats.leave.replace("%username", player.username);
                client.channels.cache.get(channel).send({embeds: [
                    {
                        color: config.color.leave,
                        description: msg
                    }
                ]});
            });
        } catch (e) {
            console.log(e);
        }
    }
}