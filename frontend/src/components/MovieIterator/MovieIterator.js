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
    const [poster, setPoster] = useState("")
    const [average, setAverage] = useState("")

    const callPopup = (t, p, g, po, a) => {
        setShow(!show)
        setTitle(t);
        setPlot(p);
        setGenre(g)
        setPoster(po)
        setAverage(a)
    }
    
    const myStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        height: "100%",
        width: "100%",
        
      };
    const containerStyle = {
        background: "black",
        width: "80%",
        height: "100%",
        textAlign: "center",
        display: "flex",
        alignContent: "center",
        position: "absolute",
        top: "-5%",
        left: "10%"
    }

    // maps every movie in movies and creates a movie component for each.
    const displayMovies = (props.movies)
        .map((movie, index) => (
                <div key={movie._id} >
                    <Movie 
                        onClick={(average) => callPopup(movie.Title, movie.Plot, movie.Genre, movie.Poster, average)} 
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
                    <h3 id={"popTitle"}>{title}</h3>
                    <p>Plot: {plot}</p>
                    <p>Genre: {genre}</p>
                    <p>Average rating: {average}</p>
                    <img
                        alt={`The movie titled: ${title}`}
                        src={poster}
                        className="Poster"
                    />
                    
                    
                    <Button className="button" color="danger" onClick={() => setShow(false)}>Close</Button>
                </div>
            </Modal>
            {props.movies.length ? null : <p className="noResult">Found no results</p>}
            <div className={"movies"}>
                {props.movies.length ? displayMovies : null}
            </div>
        </div>
        
    )

}

export default MovieIterator
