import React from "react";
import StarRatingComponent from 'react-star-rating-component';
import './Movie.css';

const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = ({ movie, onClick}) => {
    
    
    const poster =  movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
   
    
    
    return (
        <div>
        <div className="movie">
            
            <div>
                <img
                    onClick={onClick}
                    alt={`The movie titled: ${movie.Title}`}
                    src={poster}
                    className="Poster"
                />
            </div>
            <h4>{movie.Title}</h4>
            <p>({movie.Year})</p>


        </div>

        <StarRatingComponent
            name={movie.Title} /* name of the radio input, it is required */
            emptyStarColor="grey"
        />
        <br/>
        <br/>
        <br/>
        
        </div>
    );
};


export default Movie;