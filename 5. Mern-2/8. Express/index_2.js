const path = require("path");
const express = require("express");
const app = express();

const template_path = path.join(__dirname, "./template/views");
app.set("view engine", "hbs");
app.set("views", template_path);

app.get("/", (req, res) => {
    res.render("index", {
        name : "Yash",
    });
});

app.listen(8000, "127.0.0.1", () => {
    console.log("Listening to port no. 8000");
});