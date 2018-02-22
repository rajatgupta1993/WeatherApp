import React from 'react';

export default function SearchBox({searchText, onValueChange, onSearchClicked }) {

    return (
       <div className="search-box-container">
            <div className="search-box-container">
                <input className="search-input" type="text" placeholder="Enter a city name"
                        value={searchText} onChange={onValueChange} />
                <button className="search-button" type="button"
                        onClick={onSearchClicked}>
                    <i className="glyphicon glyphicon-search" />
                </button>
            </div>
        </div>);
}