
const express = require("express");
const movies = require("../models/movies");

const router = express.Router();



router.get("/", async (request, response) => {
    try{

    let content = {}

// variables which need paginate. Sort is what we sort by, order(1, -1) is DESC or ASC
// page and pages is the page num, limit is how many elements we show on each page.

// default is sort on year in desc with maximum 6 movies on each page

   
    let sort = request.query.sort ? request.query.sort: 'Year';
    let order = request.query.order ? request.query.order : '-1';
    let page = request.query.page ? request.query.page : 1;
    let pages = parseInt(page);
    let limit = request.query.limit ? request.query.limit : 6;
    let limits =  parseInt(limit);


    // handle queries, $regex and $options makes it possible to search for parts of a word and use both lower and uppercase

    if (request.query.year) { content.Year = request.query.year}
    if (request.query.title) { content.Title = {$regex : RegExp(request.query.title), $options : '-i'}}
    if (request.query.genre) { content.Genre = {$regex : RegExp(request.query.genre), $options : '-i'}}
    

    // pagination plugin for mongoose. Makes it easier to sort and get x amount of movies.
    // mongoose-paginate is imported in movies.js
    // takes in page, limit, sort and order.

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




router.get("/all-movies", async (req, res) => {
   await res.json(await movies.find());
});


router.put("/:imdbID", (request, response) => {
    
    // find the imdbID for the movie, and adds a rating to Rating

    console.log(request.params)
       movies.findOneAndUpdate(
           { imdbID: request.params.imdbID },
           { $push: { "Rating": request.body.rating } }
       )
           .then(response.json("Det gikk!"))
           .catch(err => console.log(err))
       console.log("Result: ", request.body)
   
    });
   

module.exports = router;