const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const template_path = path.join(__dirname , "./template/Views");
const partial_path = path.join(__dirname , "./template/Partials");

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partial_path);

app.get("/", (req, res) => {
    res.render("index", {
        name : "Batman",
        page : "Home Page",
    });
});

app.get("/about", (req, res) => {
    res.render("index", {
        name : "Yash",
        page : "About Page",
    });
});

app.get("/contact", (req, res) => {
    res.render("index", {
        name : "Yash",
        page : "Contact Page",
    });
});

app.listen(8000, "127.0.0.1", () => {
    console.log("Listening to Port no. 8000");
});