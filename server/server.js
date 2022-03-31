const path = require("path");
const express = require("express");

const crypto = require("./routes/crypto");

const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, "public")));

server.use("/api/v1/crypto", crypto);

module.exports = server;
