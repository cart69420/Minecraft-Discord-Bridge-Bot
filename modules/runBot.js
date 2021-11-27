const mineflayer = require('mineflayer');
const config = require("./config.json");
const { Client, Intents, Collection } = require('discord.js');

const runMC = (username, password, ip, port, version) => {
    const bot = mineflayer.createBot({
        host: ip || 'localhost',
        port: port ? parseInt(port) : 25565,
        username: username ? username : 'BridgeBot',
        password: password ? password : false,
        version: version || false,
    });
    bot.prefix = config.minecraft.prefix;
    bot.commands = new Map();
    bot.config = config;
    return bot
}
const runDiscord = (token) => {
    const client = new Client({intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_PRESENCES", "GUILD_MEMBERS", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS"], allowedMentions: { parse: ['users', 'roles'], repliedUser: false }});

    client.login(token);
    client.prefix = config.discord.prefix;
    client.commands = new Collection();
    client.config = config;
    return client
}

exports.run = (token, username, password, ip, port, version) => {
    const bot = runMC(username, password, ip, port, version);
    const client = runDiscord(token);

    require("./loadEvents")(bot, client);
    require("./loadCommands")(bot, client);
    return {bot, client}
}
