// Search Bar Component

import { useState, useEffect } from "react";

const SearchBar = ({ handleSearch, searchInput }) => {


    return (

        <form>
            <input placeholder="Search for a puppy" 
            value={searchInput}
            onChange={handleSearch}></input>
            <br></br>
            <button>Search!</button>
        </form>
    )

}

export default SearchBar