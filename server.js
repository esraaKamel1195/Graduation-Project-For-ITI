  
const express = require("express");
const app = express();
const path = require("path");
const serveStatic = require("serve-static");


app.use(express.static(__dirname + "/dist/project1"));

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname + "/dist/project1/index.html"));
});
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8000);