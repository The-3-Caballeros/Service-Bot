const express = require("express");
const stdio = require("./utils/stdio");
const server = express();

server.all("/", (req, res) => req.send("Result: [OK]."));
function keepAlive() { server.listen(3e3, () => stdio.out.write("/st_bold//fg_yellow/Server is ready!/st_reset/")); }

module.exports = keepAlive;
