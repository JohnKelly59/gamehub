const express = require("express");
const bodyParser = require("body-parser");
const  path = require('path');
const app = express();
require("dotenv").config()
var https = require('https');
var config = require('./config');

app.use(express.static(path.join(__dirname + '/public')));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');



app.post("/home", function(req, res){

res.redirect("/");
  });


app.get("/", function (req,res){

res.render("main")
});

app.post("/", function(req, res){

res.redirect("/dice");
  });


app.get("/dice", function (req,res){

res.render("dice")
});


app.get("/drum", function (req,res){

res.render("drumIndex")
});

app.post("/drums", function(req, res){

res.redirect("/drum");
  });


  app.get("/simon", function (req,res){

  res.render("simonIndex")
  });

  app.post("/simong", function(req, res){

  res.redirect("/simon");
    });


    app.get("/ttt", function (req,res){

    res.render("tttIndex")
    });

    app.post("/tttg", function(req, res){

    res.redirect("/ttt");
      });



      app.post("/mailC", function(req, res){

      res.redirect("/mail");
        });

      app.get("/mail", function(req, res) {
        res.render("signup");
      });

      app.post("/send", function(req, res) {
        const first = req.body.firstName;
        const last = req.body.lastName;
        const email = req.body.email;
        console.log(first, last, email);

        const data = {
          members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
              FNAME: first,
              LNAME: last,
            }

          }
        ]
      };
      const jsonData = JSON.stringify(data);
      const url = "https://us5.api.mailchimp.com/3.0/lists/92d5775add";

      const options = {
        method: "POST",
        auth: config.MY_KEY
      }
      const request = https.request(url, options, function(response){
      if (response.statusCode === 200) {
        res.render("success")
      }
      else {
        res.render("failure")
      }

        response.on("data", function(data){
          console.log(JSON.parse(data));
        })
      })

      request.write(jsonData);
      request.end();

      });

      app.post("/retry", function(req, res){
        res.redirect("/mail");
      })

      const port = process.env.PORT || 8081;
      app.listen(port, () => {
        console.log("Server is listening on: ", port);
      });

   
