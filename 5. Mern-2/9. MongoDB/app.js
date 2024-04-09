const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/yash")
.then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});

const PlaylistSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    office : {
        type : String,
    },
    age : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
});

const Playlist = new mongoose.model("playlist", PlaylistSchema);