const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");

const templatePath = path.join(__dirname, "./template/Views");
const partialPath = path.join(__dirname, "./template/Partials");

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
    res.render("index", {
        name : "Yash",
        page : "Home Page",
    });
});

app.get("/about", (req, res) => {
    res.render("index",{
        name : "Yash",
        page : "About Page",
    });
});

app.get("/contact", (req, res) => {
    res.render("index", {
        name : "Batman",
        page : "Contact Page",
    });
});

app.listen(8000, "127.0.0.1", () => {
    console.log("Listening to Port no. 8000");
});