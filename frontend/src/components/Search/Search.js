import React, { useState } from "react";
import { Button, FormGroup, Input, ButtonGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { yearAsc, yearDesc, titleAsc, titleDesc, searchValue, resetPage } from '../../actions'


import './Search.css';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const [showOptions, setShowOptions] = useState(false)


    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        props.resetPage()
        props.searchValue(searchValue)
        console.log("searching for props.searchValue: " + searchValue);
        console.log("props.searchText: " + props.searchText);

        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    const callSortFunction = (action) => {
        action()
        props.sort()
    }

// TODO  SEARCH ER ALT FOR BRED, SKAL FIKSES
    return (
        <div>
            <FormGroup>
                <Input
                    className="Search"
                    type="search"
                    name="search"
                    id="exampleSearch"
                    placeholder="Search: title"
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
                                <Button color="info" onClick={() => callSortFunction(props.titleAsc)}>Title A-Z</Button>
                                <Button color="info" onClick={() => callSortFunction(props.titleDesc)}>Title Z-A</Button>
                                <Button color="info" onClick={() => callSortFunction(props.yearAsc)}>New - Old</Button>
                                <Button color="info" onClick={() => callSortFunction(props.yearDesc)}>Old - New</Button>
                            </ButtonGroup>
                        </div>
                        <div className="Filter">
                            <p>filter:</p>
                            <ButtonGroup >
                                <Button  color="info">year 2000-</Button>
                                <Button  color="info">year -1999</Button>
                            </ButtonGroup>
                        </div>
                        <br/>
                        <Button color="danger" onClick={() => setShowOptions(false)}>Hide options</Button>
                    </div>
                </div>
            : <div>
                <Button color="info" onClick={() => setShowOptions(true)} >Show options</Button>
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
        resetPage: () => dispatch(resetPage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);


