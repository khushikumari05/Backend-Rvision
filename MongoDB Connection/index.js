const express = require("express");
const dotenv = require("dotenv").config();
const connectToDB = require("./config/db.js");
const UserRouter = require("./routes/user.routes.js");
const auth = require("./middleware/auth.js");
const server =express();
server.use(express.json());
server.use("/user", UserRouter);
const PORT = 5000 || 

server.get("/",(req,res)=>{
    console.log("Hello World");

})

server.get("/game", auth, (req, res)=>{
    res.send("Entering games zone")
})

server.listen(PORT, async() =>{
    try {
        await connectToDB
        console.log(`server is running on ${PORT}`);
        console.log("DB connected successfully")
    } catch (error) {
        console.log("connecting failure");
    }
})