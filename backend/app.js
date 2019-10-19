import axios from "axios";


//Express
import Express, {router} from "express";
import Mongoose from "mongoose";
import BodyParser from "body-parser";

const app = Express();

Mongoose.connect("mongodb://localhost/moviedb");

app.get("/test", () => console.log("Lykkes i request"));

app.listen(3000, () => {
    console.log("Listening at http://localhost:3000...");
});
