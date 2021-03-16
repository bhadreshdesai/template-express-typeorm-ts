import express from "express";

const server = express();
server.use("/_healthcheck", (_req, res) => {
  res.status(200).json({ uptime: process.uptime() });
});

server.use("/", (_req, res) => {
  res.status(200).json({
    greetings: "Hello from server.ts ...",
    time: new Date().toLocaleString(),
    uptime: process.uptime()
  });
});

export default server;
