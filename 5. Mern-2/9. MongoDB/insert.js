const {Playlist} = require("./app");

const CreateDocument = async() => {
    try{
        const reactPlaylist = new Playlist({
            name : "Ansh",
            office : "Crio.do",
            age : 21
        });

        const result = await reactPlaylist.save();
    }catch(err){
        console.log(err);
    }
}

CreateDocument();