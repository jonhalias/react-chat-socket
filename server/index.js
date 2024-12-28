const express = require("express");
const http = require("http");
const {join} = require("path");
const {Server} = require("socket.io");
const cors = require("cors")

const app = express();
app.use(cors())
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("Client connected");

    socket.on("message", (body) => {
        console.log(body);
        socket.broadcast.emit("message", {
            body,
            require: socket.id.slice(8)
        });
    })
})

app.use(express.static(join(__dirname, "../client/dist")))

server.listen(5000, () => {
    console.log("Server on port 5000");
})