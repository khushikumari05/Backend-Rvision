const express = require("express");
const UserModel = require("../models/user.model");

const UserRouter = express.Router();

UserRouter.post("/register", async (req,res )=>{
    const {email, password, name, age} = req.body
    try {
        const user = new UserModel({
            email,
            password,
            name,
            age
        })
        
        res.status(200).json("User Registerd Successfully")
        
    } catch (error) {
        res.status(500).json(error)
    }
})

UserRouter.post("/login", async (req,res )=>{
    try {
        const {email, password} = req.body
        const user =  await UserModel.findOne({email})
        if(!user){
            return res.send("User not found")
        }
        if(user){ if(password == user.password){
            res.status(200).json("User Login Successfully")
        }
        else{
            return res.send("Wrong Password")
        }
    }
    }

    catch (error) {
        res.status(400).json("Occuring error while login")
    }
})

module.exports = UserRouter