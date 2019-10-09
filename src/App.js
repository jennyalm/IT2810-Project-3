
// Hooks
import React, { useReducer, useEffect } from "react";

// Style
import './App.css';

// React components
import Header from "./components/Header/Header";
import Movie from "./components/Movie/Movie";
import Search from "./components/Search/Search";

// redux
import Reducer from "./reducers/reducer"


import { connect } from 'react-redux';

import { success, failure, req } from './actions'

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";



const initialState = {
    loading: true,
    movies: [],
    errorMessage: null
};



const App = () => {
    const [state, dispatch] = useReducer(Reducer, initialState);




    useEffect(() => {

        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
                dispatch(success(jsonResponse.Search))

            });
    }, []);

    const search = searchValue => {
        dispatch(req())

        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    dispatch(success(jsonResponse.Search))
                } else {
                    dispatch(failure(jsonResponse.Error))
                }
            });
    };

    const { movies, errorMessage, loading } = state;

    return (
        <div className="App">
            <Header text="HOOKED" />
            <Search search={search} />
            <p className="App-intro">Sharing a few of our favourite movies</p>
            <div className="movies">
                {loading && !errorMessage ? (
                    <span>loading... </span>
                ) : errorMessage ? (
                    <div className="errorMessage">{errorMessage}</div>
                ) : (
                    movies.map((movie, index) => (
                        <Movie key={`${index}-${movie.Title}`} movie={movie} />
                    ))
                )}
            </div>
        </div>
    );
};

export default connect()(App);
