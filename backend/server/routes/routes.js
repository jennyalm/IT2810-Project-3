
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
    try{

    let content = {}

//variabler som trengs i paginate funksjonen. Sort angir hva som skal sorteres, order(1,-1) angir DESC eller ASC.
// page og pages angir sidetallet og limit angir hvor mange elementer man vil vise på hver side.

// Default er er satt som sortert på Year, i stigende rekkefølge. 6 filmer pr. page

    let sort = request.query.sort ? request.query.sort: 'Year';
    let order = request.query.order ? request.query.order : '-1';
    let page = request.query.page ? request.query.page : 1;
    let pages = parseInt(page);
    let limit = request.query.limit ? request.query.limit : 6;
    let limits =  parseInt(limit);

    //håndtere query som blir sendt inn, $regex og $options gjør det mulig å søke på deler av et ord og
    //også søke med både upper og lowercase.

    if (request.query.year) { content.Year = request.query.year}
    if (request.query.title) { content.Title = {$regex : RegExp(request.query.title), $options : '-i'}}
    if (request.query.genre) { content.Genre = {$regex : RegExp(request.query.genre), $options : '-i'}}


    //pagination plugin for mongoose. Gjør det enkelt å sortere og hente ut x antall filemr.
    //mongoose-paginate er importert i movies.js
    //tar inn page, limit, sort og order

    movies.paginate(content,{
        page: pages,
        limit: limits,
        sort: {[sort]:[order]}
    }).then(side => {
        console.log(side);
        response.json(side)
    })
        .catch(err => {
            response.status(500).json(err);
        })

    } catch(err){
        next(err)
    }
});



router.put("/rating", (request, response) => {
    // finner imdbID til filmen og legger til rating i en liste som inneholder alle rating'sene for den filmen.
    // listen Rating i movies.js
       movies.findOneAndUpdate(
           { imdbID: request.body.imdbID },
           { $push: { "Rating": request.body.rating } }
       )
           .then(response.json("Det gikk!"))
           .catch(err => console.log(err))
       console.log("Result: ", request.body)
   
    });
   



//antall filmer per side = 10
/*
movies.paginate(content, {
    page: request.query.page,
    limit: 10,
    sort: order
}).then(items => response.json(items));
*/
// export default router;
module.exports = router;