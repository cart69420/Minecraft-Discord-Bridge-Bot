require("dotenv").config();

exports.init = function() {
    require("./modules/runBot").run(
        process.env.DISCORD_TOKEN, 
        process.env.MC_USERNAME, 
        process.env.MC_PASSWORD, 
        process.env.MC_SERVER_IP, 
        process.env.MC_SERVER_PORT
    );
    require("./communication/webserver").init(process.env.WEBSERVER_PORT);
}