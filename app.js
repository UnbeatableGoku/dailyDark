const express = require("express");
const https = require("https")
const app = express();
const jokef = require(__dirname + "/joke1.js")

app.get("/", function(req, res) {
        let joke1 = jokef.getjoke1();
        // res.write(joke1);
        // res.sendFile(__dirname + "/index.html")
        console.log(joke1);
        res.send(joke1)

    })
    // app.post("/", function(req, res) {
    //     console.log("done");
    // })


app.listen(3000, function() {
    console.log("we connected");
})