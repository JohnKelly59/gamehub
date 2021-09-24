const express = require("express");
const bodyParser = require("body-parser");
const  path = require('path');
const app = express();

 app.use(express.static(__dirname + '/public'));
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


app.listen(process.env.PORT || 5000);
