var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love", {thingVar : thing});
});

app.get("/posts", function(req, res) {
    var posts = [
            {title: "post1", author: "me"},
            {title: "post2", author: "you"},
            {title: "post3", author: "us"}
        ];
    res.render("posts", {posts: posts});
}); 

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Your app is now being served!");
});