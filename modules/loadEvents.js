const fs = require("fs")

module.exports = function(bot, client) {
    const categories = fs.readdirSync("./events/")
    for(categoryIndex in categories) {
        const events = fs.readdirSync(`./events/${categories[categoryIndex]}`)
        for(eventIndex in events) {
            const eventFile = require(`../events/${categories[categoryIndex]}/${events[eventIndex].split(".")[0]}`)
            if (!eventFile.name) return console.error(`${events[eventIndex]} has no name`)
            if (categories[categoryIndex] == "discord") {
                if (eventFile.once) {
                    client.once(eventFile.name, (...args) => eventFile.execute(...args, client, bot));
                } else {
                    client.on(eventFile.name, (...args) => eventFile.execute(...args, client, bot));
                }
            } else if (categories[categoryIndex] == "minecraft") {
                if (eventFile.once) {
                    bot.once(eventFile.name, (...args) => eventFile.execute(...args, bot, client));
                } else {
                    bot.on(eventFile.name, (...args) => eventFile.execute(...args, bot, client));
                }
            }
        }
    }
}