const express = require('express');
const app = express();
const color = require('colors');
const cors = require("cors");
const userRouter = require("./Routes/user.route");
require("./config/db");

app.use(cors())
// form ar data access korar jonno.
//Jokhon amra database a data send korbo tokhon se jate data 
//nite pare tar jonno ayta set korte hoy.
app.use(express.urlencoded({extended:true}));
// jodi json use korte cai
app.use(express.json());
app.use("/api/users", userRouter);

// api/users : GET
// api/users/:id : GET
// api/users/ : POST
// api/users/:id : PATCH
// api/users/:id : DELETE



app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/./views/index.html");
});
// Route not found
app.use((req, res, next) =>{
    res.status(404).json({
        message: "Route not found",
    });
});
// Handling server error
app.use((err, req, res, next) =>{
    res.status(500).json({
        message: "Something broke",
    });
});

module.exports = app;