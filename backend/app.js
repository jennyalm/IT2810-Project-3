
const express = require('express');
const mongoose = require('mongoose');
// const path = require('path');
// const body-parser = require('body-parser');
const router = require('./server/routes/routes');
// const cors = require('cors');


const app = express();

mongoose.connect("mongodb://it2810-13.idi.ntnu.no:27017/moviedb");

// app.get("/Product?", () => console.log("Lykkes i request"));
app.use("/movies", router);

app.listen(4000, () => {
    console.log("Listening at http://localhost:4000/...");
});