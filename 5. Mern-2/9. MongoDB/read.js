const {Playlist} = require("./app");

const getDocument = async() => {
    try{
        const result = await Playlist.find();
        // const result = await Playlist.find({age : 22}).select({name : 1});
        console.log(result);
    }catch(err){
        console.log(err);
    }
};

getDocument();