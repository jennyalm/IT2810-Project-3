// Hooks
import React, { useEffect } from "react";
import axios from "axios"


// Style
import './App.css';

// React components
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import DisplayMovies from './components/DisplayMovies/DisplayMovies'


// redux
import { connect } from 'react-redux';
import { success, failure, req, yearAsc, yearDesc } from './actions'


// the default search when website opens, with search: s=tarzan
const MOVIE_API_URL = fetch(process.env.PUBLIC_URL + "/fakeData").then(response => response.json());


// const MOVIE_API_URL = "https://www.omdbapi.com/?s=tarzan&apikey=4a3b711b";


const App = (props) => {

    // works like a lifecycle method and updates displayed movies depending on Search
    useEffect(() => {
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
                props.success(jsonResponse.Search)
            });
    }, []);

    // The search method , må endre 12000 til riktig nummer
    const search = searchValue => {
        console.log("Attempting to search")
        props.req()

        const urlToSearch = `http://localhost:4000/Product?` +((props.movies.Title) ? `&Title=${props.movies.Title}` : '');
        console.log(urlToSearch);
        axios.get(urlToSearch)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    props.success(jsonResponse.Search)
                } else {
                    props.failure(jsonResponse.Error)
                }
            });
    };

    return (
        <div className="App">
            <div>
            <Header text="React-Redux movie searcher" />
            </div>
            <div className="searchStyle">
            <Search search={search} />
            </div>
            <div className={"displaySize"}>
            <DisplayMovies
                loading={props.loading}
                movies={props.movies}
                errorMessage={props.errorMessage}
            />
            </div>
        </div>
    );
};



// maps the value in the global redux store to props.

// OPS!! FÅR OPP MELDING I CONSOLE, FORVENTER NOE ANNET ENN Reducer HER, MEN HVA?
const mapStateToProps = state => ({
    loading: state.Reducer.loading,
    movies: state.Reducer.movies,
    errorMessage: state.Reducer.errorMessage,
    sortBy: state.SortReducer.sortBy,
    order: state.SortReducer.order

})

// dispatches to the global redux store.
const mapDispatchToProps = dispatch => {
    return {
        success: (event) => dispatch(success(event)),
        failure: (event) => dispatch(failure(event)),
        req: () => dispatch(req()),
        yearAsc: () => dispatch(yearAsc()),
        yearDesc: () => dispatch(yearDesc())
    }
}


// connects mapStateToProps and mapDispatchToProps to App.
export default connect(mapStateToProps, mapDispatchToProps)(App);