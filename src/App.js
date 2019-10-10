import React, { useReducer, useEffect, useState } from "react";

import './App.css';


import Header from "./components/Header/Header";
import Movie from "./components/Movie/Movie";
import Search from "./components/Search/Search";
import PopUp from "./components/PopUp/PopUp";
import StarRatingComponent from 'react-star-rating-component';

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const initialState = {
    loading: true,
    movies: [],
    errorMessage: null
};



const reducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_MOVIES_REQUEST":
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case "SEARCH_MOVIES_SUCCESS":
            return {
                ...state,
                loading: false,
                movies: action.payload
            };
        case "SEARCH_MOVIES_FAILURE":
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            };
        default:
            return state;
    }
};



const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {

        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {

                dispatch({
                    type: "SEARCH_MOVIES_SUCCESS",
                    payload: jsonResponse.Search
                });
            });
    }, []);

    const search = searchValue => {
        dispatch({
            type: "SEARCH_MOVIES_REQUEST"
        });

        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    dispatch({
                        type: "SEARCH_MOVIES_SUCCESS",
                        payload: jsonResponse.Search
                    });
                } else {
                    dispatch({
                        type: "SEARCH_MOVIES_FAILURE",
                        error: jsonResponse.Error
                    });
                }
            });
    };

    const { movies, errorMessage, loading } = state;

    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="App">
            <Header text="IT2810 Prosjekt 3" />
            <div className="searchStyle">
            <Search search={search} />

            </div>
            <p className="App-intro">Sharing a few of our favourite movies</p>
            <div className="movies">
                {loading && !errorMessage ? (
                    <span>loading... </span>
                ) : errorMessage ? (
                    <div className="errorMessage">{errorMessage}</div>
                ) : (
                    movies.map((movie, index) => (
                        <Movie onClick={() => setShowPopup(true)} key={`${index}-${movie.Title}`} movie={movie} />

                    ))
                )}
            </div>

            {showPopup ?
                <PopUp
                    text='Click "Close Button" to hide popup'
                    closePopup={() => setShowPopup(!showPopup)}
                />
                : null
            }



        </div>
    );
};

export default App;
