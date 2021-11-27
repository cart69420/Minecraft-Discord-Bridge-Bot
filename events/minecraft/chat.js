module.exports = {
    name: "chat",
    execute(username, message, bot, client) {
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