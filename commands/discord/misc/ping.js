//Example Format:
module.exports = {
    name: "Ping",   
    aliases: ["pong"],
    description: "returns Discord Bot's latency",
    usage: "ping",
    category: "Misc",
    async execute(client, message, args) {
        const msg = await message.channel.send("Ping?");
        
        msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }
}