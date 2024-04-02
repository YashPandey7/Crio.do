const fs = require("fs");

const obj = {
    name : "Yash",
    age : 22,
    company : "Crio.do",
};

const json_data = JSON.stringify(obj);

// fs.writeFile("json.json", json_data, (err) => {
//     console.log("File Created Successfully");
// });

fs.readFile("json.json", "utf-8", (err, data) => {
    console.log(data);
    const org_data = JSON.parse(data);
    console.log(org_data);
});