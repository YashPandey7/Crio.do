const EventEmitter = require("events");
const event = new EventEmitter();

event.on("btn", () => {
    console.log("Hii");
});

event.on("btn", () => {
    console.log("Yash Pandey");
});

event.emit("btn");