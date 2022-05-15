import { useState } from "react";
const SearchBar=({search})=>{

    return(
        <div className='search-cont'>
            <input type='text' onChange={(e)=>search(e.target.value)} className='ta-search' placeholder='Type to search..'></input>
           
        </div>
    )
}
export default SearchBar;