var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there!");
});

app.get("/bye", function(req, res) {
    res.send("Peace");
});

app.get("/dog", function(req, res) {
    res.send("MEOW");
});

// app.get("*", function(req, res) {
//     res.send("You are a star");
// });

app.get("/r/:subredditName/", function(req, res) {
    var subreddit = req.params.subredditName
    res.send("welcome to the " + subreddit.toUpperCase() + " subreddit")
})

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
    console.log(req.params);
    res.send("Welcome to the comments page")
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});