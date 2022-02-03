const https = require("https")
module.exports.getjoke1 = getjoke1;

function getjoke1() {
    let url = "https://v2.jokeapi.dev/joke/Dark";
    https.get(url, function(responce) {
        responce.on("data", function(data) {
            const jokeObj = JSON.parse(data)
            return jokeObj.setup;
            // const joke2 = jokeObj.delivery;
        })
    })
}