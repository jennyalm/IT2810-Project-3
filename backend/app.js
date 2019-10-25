// import axios from "axios";


//Express
// import Express from "express";
const express = require('express');
// import Mongoose from "mongoose";
const mongoose = require('mongoose');
// const path = require('path');
const BodyParser = require("body-parser");
// import router from "./server/routes/routes";
const router = require('./server/routes/routes');
// import cors from 'cors';


const app = express();
app.use(BodyParser.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // '*' tillater alle tilgang, men kan endres hvis man vil begrense adgang
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );

    // fjernet if Options 
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    
    
    next();
});

mongoose.connect("mongodb://it2810-13.idi.ntnu.no:27017/moviedb");

// app.get("/Product?", () => console.log("Lykkes i request"));
app.use("/movies", router);

app.listen(4000, () => {
    console.log("Listening at http://localhost:4000/...");
});

// test
// Nå skal det testes
