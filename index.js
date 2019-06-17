//var express = require("express");

import * as express from "express";

var app = express.default();

var port = 8012;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("/public");
});

app.listen(port, () => {
  console.log("Oah. My express server run on port " + port);
});
