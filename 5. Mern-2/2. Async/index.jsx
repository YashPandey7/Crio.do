const fs = require("fs");
// fs.writeFile("read.txt", "Hello Everyone", (err) => {
//     console.log("File Created Successfully");
//     console.log(err);
// });

fs.readFile("reads.txt", "utf-8", (err, data) => {
    console.log(data);
});