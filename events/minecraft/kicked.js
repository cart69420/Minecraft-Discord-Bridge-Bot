module.exports = {
    name: "kicked",
    execute(bot) {
        bot.on('kicked', (reason) => {
            setTimeout(() => {
                console.log(`Bot was kicked from the server: ${reason}. Trying to reconnect...`);
                require(__filename__)(username, password, ip, port, version);
            }, 5000);
        })
    }
}