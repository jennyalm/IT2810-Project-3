import React, { useState } from 'react'
import Movie from '../Movie/Movie'
import './MovieIterator.css';
import Modal, {closeStyle} from 'simple-react-modal'
import {Button} from 'reactstrap'

function MovieIterator(props){


    const [show, setShow] = useState(false);

    const [title, setTitle] = useState("");
    const [plot, setPlot] = useState("");
    const [genre, setGenre] = useState("")

    // added keys to every child component to get rid of a error in the console.
    
    const callPopup = (t, p, g) => {
        setShow(!show)
        setTitle(t);
        setPlot(p);
        setGenre(g)
    }
    
    const myStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        height: "100%",
        width: "100%"
      };
    const containerStyle = {
        background: "black",
        width: "50%",
        height: "70%",
        textAlign: "center",
        display: "flex",
        alignContent: "center"
    }

    const displayMovies = (props.movies)
        .map((movie, index) => (
                <div key={movie._id} >
                    <Movie 
                        onClick={() => callPopup(movie.Title, movie.Plot, movie.Genre)} 
                        key={movie._id} 
                        movie={movie}
                        imdbID = {movie.imdbID} 
                        />

                    
                </div>
        
                
            )
        )





    return(
        <div className="contrainer">
            <Modal 
                show={show} 
                style={myStyle}
                containerStyle={containerStyle}
                >
                <div className="popup">
                    <h1>{title}</h1>
                    <p>Plot:</p>
                    <p>{plot}</p>
                    <p>Genre: {genre}</p>
                    <Button className="button" color="danger" onClick={() => setShow(false)}>Close</Button>
                </div>
            </Modal>
            <div className={"movies"}>
                {displayMovies}
            </div>
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