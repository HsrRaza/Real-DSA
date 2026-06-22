import http from "node:http";
import { WebSocketServer } from "ws";
import fs from "node:fs/promises";
import path from "node:path";

const port = process.env.PORT ?? 9000;

const httpServer = http.createServer(async (req, res) => {

    const indexFile = await fs.readFile(
        path.resolve("./index.html"),
        "utf-8"
    );

    res.setHeader("Content-Type", "text/html");

    res.end(indexFile);
});

const wsServer = new WebSocketServer({
    server: httpServer
});

wsServer.on("connection", (websocket) => {

    console.log("WebSocket Connected");

    websocket.on("message", (data) => {
        console.log(data.toString());
    });
});

httpServer.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});