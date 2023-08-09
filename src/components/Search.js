import React from 'react';
import style from './search.module.css'
const Search = () => {
    return (
        <div className={style.container}>
            <h2>Search Phones</h2>
            <div className={style.searchBox}>
            <input type='text' placeholder='Search' />
            <button>Search</button>
            </div>
        </div>
    );
};

export default Search;