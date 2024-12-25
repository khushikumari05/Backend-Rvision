const auth = (req,res,next) =>{
    if(req.query.token == "userToken"){
        next()
    }
    else{
        res.send("Please Login First")
    }
}
module.exports = auth
