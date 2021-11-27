module.exports = {
    name: 'login',
    execute(bot) {
        bot.on('login', () => {
            console.log(`Bot logged in ${ip || 'localhost'}:${port || 25565} (${bot.version}) as ${bot.username}`);
        });
    }
}