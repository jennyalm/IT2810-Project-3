import React from "react";
import './Header.css';
import StatToggle from "../StatButton/StatButton";

const Header = (props) => {
    return (
        <div className="header">
            <header className="App-header">
                <h1>{props.text}</h1>
            </header>
            <div className="toggle">
                <StatToggle/>
            </div>
        </div>

    );
};

export default Header;