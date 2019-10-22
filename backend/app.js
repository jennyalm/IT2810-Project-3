// import axios from "axios";


//Express
import Express from "express";
import Mongoose from "mongoose";
import BodyParser from "body-parser";
import router from "./server/routes/routes";
import cors from 'cors';


const app = Express();

Mongoose.connect("mongodb://admin:group13@it2810-13.idi.ntnu.no:27017/moviedb");

// app.get("/Product?", () => console.log("Lykkes i request"));
app.use("/movies",router);

app.listen(4000, () => {
    console.log("Listening at http://localhost:4000/...");
});

// test
// Nå skal det testes
