const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
require("dotenv").config();
var https = require("https");
var config = require("./config");

app.use(express.static(path.join(__dirname + "/public")));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.set("view engine", "ejs");

//go back to home route
app.post("/home", function (req, res) {
  res.redirect("/");
});

//home route
app.get("/", function (req, res) {
  res.render("main");
});

//go to dice route
app.post("/", function (req, res) {
  res.redirect("/dice");
});

//dice route
app.get("/dice", function (req, res) {
  res.render("dice");
});

//drum route
app.get("/drum", function (req, res) {
  res.render("drumIndex");
});
//go to drum route
app.post("/drums", function (req, res) {
  res.redirect("/drum");
});

//simon route
app.get("/simon", function (req, res) {
  res.render("simonIndex");
});

//go to simon route
app.post("/simong", function (req, res) {
  res.redirect("/simon");
});

//tic tac toe route
app.get("/ttt", function (req, res) {
  res.render("tttIndex");
});

// go to tac toe route
app.post("/tttg", function (req, res) {
  res.redirect("/ttt");
});

//go to mail route
app.post("/mailC", function (req, res) {
  res.redirect("/mail");
});

//mail route
app.get("/mail", function (req, res) {
  res.render("signup");
});

//mailChimp Api
app.post("/send", function (req, res) {
  const first = req.body.firstName;
  const last = req.body.lastName;
  const email = req.body.email;
  console.log(first, last, email);

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: first,
          LNAME: last,
        },
      },
    ],
  };
  const jsonData = JSON.stringify(data);
  const url = "https://us5.api.mailchimp.com/3.0/lists/92d5775add";

  const options = {
    method: "POST",
    auth: config.MY_KEY,
  };
  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.render("success");
    } else {
      res.render("failure");
    }

    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
});

// go back to mail toure
app.post("/retry", function (req, res) {
  res.redirect("/mail");
});

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log("Server is listening on: ", port);
});
