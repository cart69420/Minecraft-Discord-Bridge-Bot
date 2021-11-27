module.exports = {
    name: 'ready',
    once: true,
    execute(bot) {
        client.on('ready', () => {
            console.log(`Discord Bot logged in as ${client.user.tag} (${client.user.id})`);
        });
    }
}