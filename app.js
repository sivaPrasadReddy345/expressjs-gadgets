const express = require("express");

const add = express();

add.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});

module.exports = add;
