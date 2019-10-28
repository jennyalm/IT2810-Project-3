import React, { useState } from "react";
import { Button, FormGroup, Input, ButtonGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { yearAsc, yearDesc, titleAsc, titleDesc, searchValue, resetPage, filterAction, filterComedy, filterDrama, filterFantasy, filterThriller } from '../../actions'


import './Search.css';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState();

    const [showOptions, setShowOptions] = useState(false)


    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue(searchValue)
    }

    // calls the search function in App.js
    const callSearchFunction = (e) => {
        props.resetPage()
        props.searchValue(searchValue)
        console.log("searching for props.searchValue: " + searchValue);
        console.log("props.searchText: " + props.searchText);

        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    // We are sending in order and sort since the state don't update quick enough
    const callSortFunction = (action, orderBy, sortBy) => {
        props.orderResult(orderBy, sortBy)
        action()
    }

    const callFilterFunction = (action, filterBy) => {
        props.filter(filterBy)
        action()
    }

    
// buttons and input field is made with reactstrap.
    return (
        <div>
            <FormGroup>
                <Input
                    className="Search"
                    type="search"
                    name="search"
                    id="exampleSearch"
                    placeholder="Search (e.g lord of the rings)"
                    value={searchValue}
                    onChange={handleSearchInputChanges}
                    

                />
                <br/>
                <Button id="searchButton" size="lg" block color="success" onClick={callSearchFunction} type="submit" value="SEARCH">SEARCH</Button>
            </FormGroup>
            {showOptions ? 
                <div className="Options">
                    <div className="DisplayOptions">
                        <div className="Sort">
                            <p>sort</p>
                            <ButtonGroup >
                                <Button color="info" onClick={() => callSortFunction(props.titleAsc, "1", "Title")}>Title A-Z</Button>
                                <Button color="info" onClick={() => callSortFunction(props.titleDesc, "-1", "Title")}>Title Z-A</Button>
                                <Button color="info" onClick={() => callSortFunction(props.yearAsc, "-1", "Year")}>New - Old</Button>
                                <Button color="info" onClick={() => callSortFunction(props.yearDesc, "1", "Year")}>Old - New</Button>
                            </ButtonGroup>
                        </div>
                        <div className="Filter">
                            <p>filter:</p>
                            <ButtonGroup >
                                <Button id={"action"} color="info" onClick={() => callFilterFunction(props.filterAction, "action")}>Action</Button>
                                <Button  color="info" onClick={() => callFilterFunction(props.filterComedy, "comedy")}>Comedy</Button>
                                <Button  color="info" onClick={() => callFilterFunction(props.filterDrama, "drama")}>Drama</Button>
                                <Button  color="info" onClick={() => callFilterFunction(props.filterFantasy, "fantasy")}>Fantasy</Button>
                                <Button  color="info" onClick={() => callFilterFunction(props.filterThriller, "thriller")}>Thriller</Button>
                            </ButtonGroup>
                        </div>
                        <br/>
                        <Button color="danger" onClick={() => setShowOptions(false)}>Hide options</Button>
                    
                    </div>
                </div>
            : <div>
                <Button id="options" color="info" onClick={() => setShowOptions(true)} >Show options</Button>
            </div>    
            }
            <br/><br/>
        </div>
    );
}

const mapStateToProps = state => ({
    order: state.SortReducer.order,
    sortBy: state.SortReducer.sortBy,
    searchText: state.SearchReducer.search
})

// dispatches to the global redux store.
const mapDispatchToProps = dispatch => {
    return {
        yearAsc: () => dispatch(yearAsc()),
        yearDesc: () => dispatch(yearDesc()),
        titleAsc: () => dispatch(titleAsc()),
        titleDesc: () => dispatch(titleDesc()),
        searchValue: (event) => dispatch(searchValue(event)),
        resetPage: () => dispatch(resetPage()),
        filterAction: () => dispatch(filterAction()),
        filterComedy: () => dispatch(filterComedy()),
        filterDrama: () => dispatch(filterDrama()),
        filterFantasy: () => dispatch(filterFantasy()),
        filterThriller: () => dispatch(filterThriller()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);


