const express = require("express");
const path = require("path");

// Initialization
const app = express();

// Settings
app.listen(process.env.PORT || 8080);

// Public
app.use(express.static((__dirname + "/dist/angular-coingecko-api")));

// Routes
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/angular-coingecko-api/index.html"));
});
