
const express = require('express');
const mongoose = require('mongoose');
// const path = require('path');
const BodyParser = require("body-parser");
// import router from "./server/routes/routes";
const router = require('./server/routes/routes');
// const cors = require('cors');


const app = express();
app.use(BodyParser.json())
app.use((req, res, next) => {
    // allows CORS, backend and frontend on different ports
    res.header('Access-Control-Allow-Origin', '*'); // '*' allows everyone access, can be changed if we want
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    
    next();
});

mongoose.connect("mongodb://it2810-13.idi.ntnu.no:27017/moviedb");


app.use("/movies", router);

app.listen(4000, () => {
    console.log("Listening at http://localhost:4000/...");
});