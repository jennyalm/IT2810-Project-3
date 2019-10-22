// import mongoose from 'mongoose';
const mongoose = require('mongoose');
// import mongoosePaginate from 'mongoose-paginate';
const mongoosePaginate = require('mongoose-paginate');


//Schema need to specify in mongodb for validation
//this is done in application layer
let ProductSchema = new mongoose.Schema({
    Title: {type: String},
    Year: {type: String},
    imdbID: {type: String},
    Type: {type: String},
    Poster: {type: String},
    Plot: {type: String},
    Rating: {type: Array},
    Genre: {type: String},
},
    {collection: "movies"})

// Pagination for å kun sende inn noen varer om gangen
ProductSchema.plugin(mongoosePaginate);

//Export schema som mongoose model
module.exports=mongoose.model('movies',ProductSchema)



// export default ProductSchema;