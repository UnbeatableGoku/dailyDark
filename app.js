const express = require("express");
const https = require("https")
const ejs = require("ejs")
const bodyParser = require("body-parser")
var joke2 = "";
const app = express();

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + "/public"))


app.get("/", function(req, res) {
    let url = "https://v2.jokeapi.dev/joke/Dark?type=twopart";

    https.get(url, function(responce) {
        responce.on("data", function(data) {
            const jokeObj = JSON.parse(data)
            var joke1 = jokeObj.setup
            res.render(__dirname + "/index.ejs", { joke1: joke1 })
            console.log(jokeObj.delivery);
            joke2 = jokeObj.delivery;
        })
    })
})

app.post("/", function(req, res) {
    res.render(__dirname + "/answer.ejs", { joke2: joke2 })
})

app.listen(process.env.PORT || 3000, function() {
    console.log("we connected");
})











//https://v2.jokeapi.dev/joke/Dark