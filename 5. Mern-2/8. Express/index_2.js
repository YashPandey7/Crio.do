const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index", {
        name : "Yash",
    });
});

app.listen(8000, "127.0.0.1", () => {
    console.log("Listening to port no. 8000");
});