const mongoose = require('mongoose');

// jo bhi aapne env file me define kiya hoga..wo proccess object me load ho jayega
require("dotenv").config();

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL, {
    })
    .then(() => console.log("DB Connection is successfull"))
    .catch( (error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        process.exit(1);
    });
}

module.exports = dbConnect;