module.exports = {
    name: "messageCreate",
    execute(message, client, bot) {
        if (message.author.bot || message.content.startsWith(client.prefix) || message.channel.type === "dm") return;

        const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        if(!client.commands.has(command) && !client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))) return
        
        let commands = client.commands.get(command) 
            || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))

        try {
            commands.execute(client, message, args, bot);
        } catch (error) {
            console.error(error);
            message.reply("there was an error trying to execute that command!");
        }
    }
}