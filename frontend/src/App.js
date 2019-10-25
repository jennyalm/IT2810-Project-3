// Hooks
import React, { useEffect } from "react";

// Style
import './App.css';

// React components
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import DisplayMovies from './components/DisplayMovies/DisplayMovies';
import DataVisualization from "./components/DataVisualization/DataVisualization";
import Pages from './components/Pages/pages';

// redux
import { connect } from 'react-redux';
import { success, failure, req, searchValue } from './actions'


// the default search when website opens, with search: s=tarzan
const MOVIE_API_URL = `http://localhost:4000/movies?title=Tarzan&order=-1&sort=Year&page=1`;


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
    /* const search = searchValue => {
        console.log("TEKSTEN SOM BLE SØKT PÅ I APP: "+ searchValue)
        props.req();
        fetch(`http://localhost:4000/movies?title=${searchValue}&order=${props.order}&sort=${props.sortBy}&page=1`)
            .then(response => response.json())
            .then(jsonResponse => {
                props.success(jsonResponse.docs);
            });
    }; */

    const fetchUrl =  (url) => {
        props.req();
        fetch(url)
            .then(response => response.json())
            .then(jsonResponse => {
                props.success(jsonResponse.docs);
            });
    }

    // må ha egen til hver url siden statene ikke oppdateres raskt nok.
    const search = (searchValue) => fetchUrl("http://localhost:4000/movies?title="+searchValue+"&order="+props.order+"&sort="+props.sortBy+"&page="+props.page+"&genre="+props.filterBy)
    const page = (pageNum) => fetchUrl("http://localhost:4000/movies?title="+props.searchText+"&order="+props.order+"&sort="+props.sortBy+"&page="+pageNum+"&genre="+props.filterBy)
    const orderResult = (orderBy, sortBy) => fetchUrl("http://localhost:4000/movies?title="+props.searchText+"&order="+orderBy+"&sort="+sortBy+"&page="+props.page+"&genre="+props.filterBy)
    const filter = (typeFilter) => fetchUrl("http://localhost:4000/movies?title="+props.searchText+"&order="+props.order+"&sort="+props.sortBy+"&page="+props.page+"&genre="+typeFilter)
    //const sort = (sortBy) => fetchUrl("http://localhost:4000/movies?title="+props.searchText+"&order="+props.order+"&sort="+sortBy+"&page="+props.page)


    return (
        <div className="Content">
            <Header text="Group 13" /> 
            <div className="searchStyle">
                <Search 
                    search={search} 
                    orderResult={orderResult}
                    filter={filter}
                />
            </div>
            <div className="App">
                <div className={"displaySize"}>
                    <DisplayMovies
                        loading={props.loading}
                        movies={props.movies}
                        errorMessage={props.errorMessage}
                    />
                </div>
                <Pages changePage={page}/>
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
    errorMessage: state.Reducer.errorMessage,
    searchText: state.SearchReducer.search,
    order: state.SortReducer.order,
    sortBy: state.SortReducer.sortBy,
    page: state.PageReducer.page,
    filterBy: state.FilterReducer.filterBy
})

// dispatches to the global redux store.
const mapDispatchToProps = dispatch => {
    return {
        success: (event) => dispatch(success(event)),
        failure: (event) => dispatch(failure(event)),
        req: () => dispatch(req()),
    }
}



// connects mapStateToProps and mapDispatchToProps to App.
export default connect(mapStateToProps, mapDispatchToProps)(App);