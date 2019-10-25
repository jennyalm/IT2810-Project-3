// Hooks
import React, { useEffect } from "react";

// Style
import './App.css';

// React components
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import DisplayMovies from './components/DisplayMovies/DisplayMovies'
import DataVisualization from "./components/DataVisualization/DataVisualization";

// redux
import { connect } from 'react-redux';
import { success, failure, req } from './actions'


// the default search when website opens, with search: s=tarzan
const MOVIE_API_URL = `http://localhost:4000/movies?title=Tarzan`;


const App = (props) => {

    // works like a lifecycle method and updates displayed movies depending on Search
    useEffect(() => {
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
                props.success(jsonResponse.docs)
            });
    }, []);

    // The search method
    const search = searchValue => {
        props.req()
        fetch(`http://localhost:4000/movies?title=${searchValue}`)
            .then(response => response.json())
            .then(jsonResponse => {
                props.success(jsonResponse.docs);
            });
    };

    return (
        <div className="Content">
            <Header text="Group 13" /> 
            <div className="searchStyle">
                <Search search={search} />
            </div>
            <div className="App">
                <h2>Movie searcher</h2>
                <div className={"displaySize"}>
                <DisplayMovies
                    loading={props.loading}
                    movies={props.movies}
                    errorMessage={props.errorMessage}
                />
                </div>
            </div>
            <div className="Statistics">
                <DataVisualization/>
            </div>
        </div>

    );
};



// maps the value in the global redux store to props.

// OPS!! FÅR OPP MELDING I CONSOLE, FORVENTER NOE ANNET ENN Reducer HER, MEN HVA?
const mapStateToProps = state => ({
    loading: state.Reducer.loading,
    movies: state.Reducer.movies,
    errorMessage: state.Reducer.errorMessage
})

// dispatches to the global redux store.
const mapDispatchToProps = dispatch => {
    return {
        success: (event) => dispatch(success(event)),
        failure: (event) => dispatch(failure(event)),
        req: () => dispatch(req())
    }
}



// connects mapStateToProps and mapDispatchToProps to App.
export default connect(mapStateToProps, mapDispatchToProps)(App);