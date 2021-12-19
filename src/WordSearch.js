import React, { useState} from "react";
import "./WordSearch.css";
import axios from "axios";

export default function WordSearch() {
    let [keyword, setKeyword] = useState("");

function handleResponse(response) {
    console.log(response.data[0]);
}

    function search(event) {    
        event.preventDefault();
        

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    return <div className="WordSearch">
        <form onSubmit={search} className="searchForm">
            <input type="search" onChange= {handleKeywordChange} /> 
        </form>
    </div>;
}