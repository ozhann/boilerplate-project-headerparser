// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
// app.get("/api/whoami", function(req, res) {
//   console.log(req.header("user-agent"));
//   res.json({ greeting: "hello API" });
// });

app.get("/api/whoami", (req, res) => {
  const ipaddress = "127.0.0.1";
  const language = req.header("accept-language");
  const software = req.header("user-agent");

  console.log("ipaddress", req.header("X-Forwarded-For"));

  res.json({
    ipaddress,
    language,
    software
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 5000, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
