const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.write("<h1>Welcome to </h1>");
    res.write("<h2>About Page</h2>");
    res.send();
});

app.get("/contact", (req, res) => {
    res.json([{
        name:"yash",
        Contact : 7458995601
    },{
        name : "akshay",
        Contact : 8299546215
    }]);
});

app.listen(8000, "127.0.0.1", () => {
    console.log("listening to port no. 8000");
}); 