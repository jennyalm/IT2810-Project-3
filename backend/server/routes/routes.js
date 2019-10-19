
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


router.get("/", (request, response) => {
    //tom find metode vil hente ut alt.
    movies.find({ Title: request.query.Title }).then(items =>
        response.json(items)
    );
});

// @route PUT starRating
router.put("/rating", (request, response) => {
    let Movies = movies.where({
        Title: request.body.Title
    });
    Movies
        .findOneAndUpdate({ Movies: request.body.ratings })
        .setOptions({ new: true })
        .then(items => response.json(items));
});


//Create a new movie with rating
router.post('/rating', (req,res) => {
    //tell express what to do with the json data
    // req.body

    let movie = new movies(req.body)
    movie.save()
        .then(doc => {
            if(!doc || doc.length === 0) {
                return res.status(500).send(doc)
            }
            res.status(201).send(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});



//antall filmer per side = 10
movies.paginate(query, {
    page: request.query.page,
    limit: 10,
    sort: order
}).then(items => response.json(items));

module.exports = router;