import React from 'react'
import MovieIterator from "../MovieIterator/MovieIterator";


function DisplayMovies(props){

    return(
        <div>
            <p className="App-intro">Sharing a few of our favourite movies</p>
            <div>
                {props.loading && !props.errorMessage ? (
                    <span>loading... </span>
                ) : props.errorMessage ? (
                    <div className="errorMessage">{props.errorMessage}</div>
                ) : (

                    <MovieIterator movies={props.movies}/>
                )}
            </div>
        </div>
    )
}

export default DisplayMovies