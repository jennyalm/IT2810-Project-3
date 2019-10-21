
const express = require("express");
const movies = require("../models/movies");

const router = express.Router();

//hvis server og client kjører på ulike ports, fikser vi dette her
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // '*' tillater alle tilgang, men kan endres hvis man vil begrense adgang
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept');

    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

/*
router.get("/product/", (request, response) => {
    //tom find metode vil hente ut alt.
    movies.find({ Title: request.query.Title }).then(items =>
        response.json(items)
    );
});*/

router.get("/", async (request, response) => {
    let content = {}
    if (request.query.year) { content.Year = request.query.year}
    if (request.query.title) { content.Title = {$regex : RegExp(request.query.title), $options : '-i'}}
    if (request.query.genre) { content.Genre = {$regex : RegExp(request.query.genre), $options : '-i'}}

    console.log(content)
    const moviesFound = await movies.find(content);
    // console.log(moviesFound)
    //response.json(moviesFound);

});



// update rating
router.put("/rating", (request, response) => {
    let Movies = movies.where({
        Title: request.body.Title
    });
    Movies
        .findOneAndUpdate({ Movies: request.body.ratings })
        .setOptions({ new: true })
        .then(items => response.json(items));
});



//antall filmer per side = 10

movies.paginate(content, {
    page: request.query.page,
    limit: 10,
    sort: order
}).then(items => response.json(items));

export default router;