import React from "react";
import './Header.css';

const Header = (props) => {
    return (
        <header className="App-header">
            <p>{props.text}</p>
        </header>
    );
};

export default Header;