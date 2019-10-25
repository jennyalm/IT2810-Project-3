import React, { useState } from 'react'
import Movie from '../Movie/Movie'
import './MovieIterator.css';
import Modal, {closeStyle} from 'simple-react-modal'
import {Button} from 'reactstrap'

function MovieIterator(props){


    const [show, setShow] = useState(false);


    // states to the modal/popup
    const [title, setTitle] = useState("");
    const [plot, setPlot] = useState("");
    const [genre, setGenre] = useState("")
    
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

    // maps every movie in movies and creates a movie component for each.
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




    // the Modal is a simple-react-modal module.
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
