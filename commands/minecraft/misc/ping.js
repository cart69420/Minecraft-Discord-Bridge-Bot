//Example Format:
module.exports = {
    name: "Ping",   
    aliases: ["pong"],
    description: "returns Mineflayer Bot's latency",
    usage: "ping",
    category: "Misc",
    async execute(bot, username, message, args) {
        bot.chat("Latency: " + bot.players[bot.username].ping + "ms");
    }
}