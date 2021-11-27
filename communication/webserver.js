const express = require("express")
const http = require("http")

exports.init = (port) => {
    const app = express()
    const server = http.createServer(app)
    server.listen(port, () => console.log("Listening on port", port))
    return server
}