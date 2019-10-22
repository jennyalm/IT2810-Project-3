import React, { useState } from "react";
import { Button, FormGroup, Input, ButtonGroup } from 'reactstrap';

import './Search.css';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");


    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
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
                <Button size="lg" block color="success" onClick={callSearchFunction} type="submit" value="SEARCH">SEARCH</Button>
            </FormGroup>
            <div className="DisplayOptions">
                <div className="Sort">
                    <p>sort</p>
                    <ButtonGroup >
                        <Button color="info">Title</Button>
                        <Button color="info">Year ASC</Button>
                        <Button color="info">Year DESC</Button>
                    </ButtonGroup>
                </div>
                <div className="Filter">
                    <p>filter:</p>
                    <ButtonGroup >
                        <Button  color="info">year 2000-</Button>
                        <Button  color="info">year -1999</Button>
                    </ButtonGroup>
                </div>
            </div>
            <br/><br/>
        </div>
    );
}

export default Search;

/*<form className="search">
                <input
                    value={searchValue}
                    onChange={handleSearchInputChanges}
                    type="text"
                />
                <input onClick={callSearchFunction} type="submit" value="SEARCH" />
                <Button color="success" onClick={callSearchFunction} type="submit" value="SEARCH">SEARCH</Button>
            </form>
            <Button color="success" onClick={callSearchFunction} type="submit" value="SEARCH">SEARCH</Button>
*/