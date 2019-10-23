import React, { useState } from 'react'
import Movie from '../Movie/Movie'
import './MovieIterator.css';
import PopUp from "../PopUp/PopUp.js";



function MovieIterator(props){


    const [showPopup, setShowPopup] = useState(false);

    const displayMovies = [].concat(props.movies)
        .sort((a,b) => parseInt(b.Year) - parseInt(a.Year))
        .map((movie, index) => (
                <div>
                    <Movie onClick={() => setShowPopup(true)} key={`${index}-${movie.Title}`} movie={movie} />
                    {showPopup ?
                        <PopUp
                            Title={movie.Title}
                            closePopup={() => setShowPopup(!showPopup)}
                            Plot={movie.Plot}
                        />
                    : null
                    }
                </div>
        
                
            )
        )





    return(
        <div className={"movies"}>
            {displayMovies}
        </div>
    )

}

export default MovieIterator


/* const displayMovies = [].concat(props.movies)
        .sort((a,b) => a.Year > b.Year)
        .map((movies.js, index) => (
            <Movie key={`${index}-${movies.js.Title}`} movies.js={movies.js} />
        )
    ) */