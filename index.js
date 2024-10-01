const express = require('express');
const app = express();


const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send("Welcome to my world");
})

app.post('/api/cats', (req,res) => {
    const {name, category} = req.body;
    console.log(name);
    console.log(category);
    res.send("Cat Recognized successfully");
})

app.listen(8080, () => {
    console.log('server started at port no. 8080')
});

//connect nodejs to mongoDB with the help of mongoose

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase',{
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})
.then(() => {console.log("Connected Successfully")})
.catch((error) => {console.log("Recieved an error")})
