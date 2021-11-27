module.exports = {
    name: "chat",
    execute(username, message, bot, client) {
        try {
            const config = bot.config.minecraft.bridge;
            config.channels.forEach(channel => {
                let msg = config.formats.chat.replace("%username", username).replace("%message", message);
                client.channels.cache.get(channel).send({embeds: [
                    {
                        color: config.color.default,
                        description: msg
                    }
                ]});
            });
        } catch (e) {
            console.log(e);
        }
        if (username == bot.username || message.toLowerCase().startsWith(bot.prefix)) return;

        const args = message.slice(bot.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        if(!bot.commands.has(command) && !bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))) return

        let commands = client.commands.get(command) 
            || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))

        try {
            commands.execute(bot, username, message, args, client);
        } catch (error) {
            console.error(error);
            message.reply("there was an error trying to execute that command!");
        }
    }
}