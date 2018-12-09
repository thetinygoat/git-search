import React from 'react';
import './Searchbar.css'

const searchbar = (props) => {
    return (
        <div className="sb-container">
            <input type="text" placeholder="Search" onChange={props.change} className="sb-searchbar"></input>
        </div>
    );
}

export default searchbar;