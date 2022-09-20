const mongoose = require("mongoose");
const config = require("./config");
require("colors");

const dbURL = config.db.url;

mongoose.connect(dbURL)
.then(() =>{
    console.log("MongoDB atlas is connected".italic.blue);
})
.catch((err) =>{
    console.log(err);
    // err ashle server ta bondo korar jonno
    process.exit(1);
});