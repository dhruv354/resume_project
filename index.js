const express = require("express");
const port = process.env.port || 3000;
const path = require("path");

var app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//using middleware to include static files like css and javascript
app.use(express.static("static"));
app.get("/", (req, res) => {
  return res.render("index");
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error found");
    return res.send("Error");
  }
  console.log("Server running on port: ", port);
});
