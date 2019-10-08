import React from 'react'

const MovieList = () => {
    const [movies, setMovies] = React.useState([]);

    const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";


    React.useEffect(() => {
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
                setMovies(jsonResponse);
                movies()
            });
    });

    return(
        <div>
            <h1>movies</h1>
        </div>
    )
}

export default MovieList;