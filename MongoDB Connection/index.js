const express = require("express");
const dotenv = require("dotenv").config();
const connectToDB = require("./config/db.js");
const server =express();
server.use(express.json());
const PORT = 5000 || 

server.get("/",(req,res))

server.listen(PORT, async() =>{
    try {
        await connectToDB
        console.log(`server is running on ${PORT}`);
        console.log("DB connected successfully")
    } catch (error) {
        console.log("connecting failure");
    }
})