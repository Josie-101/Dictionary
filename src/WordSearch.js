import React, { useState} from "react";
import "./WordSearch.css";

export default function WordSearch() {
    let [keyword, setKeyword] = useState("");
    function search(event) {    
        event.preventDefault();
        alert(`Searching for meaning of ${keyword}...`);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    return <div className="WordSearch">
        <form onSubmit={search}>
            <input type="search" onChange= {handleKeywordChange} /> 
        </form>
    </div>;
}