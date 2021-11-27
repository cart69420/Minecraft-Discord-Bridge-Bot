const fs = require("fs")

module.exports = function(bot, client) {
    const m_categories = fs.readdirSync("./commands/")
    for(m_categoryIndex in m_categories) {
        const categories = fs.readdirSync(`./commands/${m_categories[m_categoryIndex]}`)
        for(categoryIndex in categories) {
            const commands = fs.readdirSync(`./commands/${m_categories[m_categoryIndex]}/${categories[categoryIndex]}`)
            for(commandIndex in commands) {
                const commandFile = require(`../commands/${m_categories[m_categoryIndex]}/${categories[categoryIndex]}/${commands[commandIndex].split(".")[0]}`)
                if (m_categories[m_categoryIndex] == "discord") {
                    client.commands.set(commandFile.name, commandFile)
                } else if (m_categories[m_categoryIndex] == "minecraft") {
                    bot.commands.set(commandFile.name, commandFile)
                }
            }
        }
    }
}