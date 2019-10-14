// Hooks
import React, { useReducer, useEffect, useState } from "react";

// Style
import './App.css';

// React components
import Header from "./components/Header/Header";
import Movie from "./components/Movie/Movie";
import Search from "./components/Search/Search";
import PopUp from "./components/PopUp/PopUp";


// redux
import Reducer from "./reducers/reducer"
import { connect } from 'react-redux';
import { success, failure, req } from './actions'

import store from "./store"


const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const initialState = {
    loading: true,
    movies: [],
    errorMessage: null
};

const App = () => {

    const [state, dispatch] = useReducer(Reducer, initialState);

    const [showPopup, setShowPopup] = useState(false);


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
            <Header text="IT2810 Prosjekt 3" />
            <div className={"searchStyle"}>
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



const mapStateToProps = state => ({
    ...state,
    loading: req(state),
    errorMessage: failure(state)
})

// const mapDispatchToProps = (dispatch, search="") => {
//     return {
//         success: () => dispatch(success(search)),
//         failure: () => dispatch(failure(search)),
//         req: () => dispatch(req())
//     }
// }



export default connect(mapStateToProps)(App);
// mapDispatchToProps

