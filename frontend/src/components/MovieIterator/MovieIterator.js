import React, { useState } from 'react'
import Movie from '../Movie/Movie'
import './MovieIterator.css';
import PopUp from "../PopUp/PopUp.js";



function MovieIterator(props){


    const [showPopup, setShowPopup] = useState(false);


    // added keys to every child component to get rid of a error in the console.

    const displayMovies = (props.movies)
        .map((movie, index) => (
                <div key={movie._id} >
                    <Movie 
                        onClick={() => setShowPopup(true)} 
                        key={movie._id} 
                        movie={movie} 
                        />

                    {showPopup ?
                        <PopUp
                            Title={movie.Title}
                            closePopup={() => setShowPopup(!showPopup)}
                            Plot={movie.plot}
                            key={movie._id}
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