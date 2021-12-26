import React, { useState} from "react";
import "./WordSearch.css";
import axios from "axios";
import Results from "./Results";

export default function WordSearch(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] =useState(null);
    let [loaded, setLoaded] =useState(false);

function handleResponse(response) {
    setResults(response.data[0]);
}

function search() {
  // documentation: https://api.dictionaryapi.dev/
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiUrl).then(handleResponse);

}
    function handlesubmit(event) {
      event.preventDefault();
      search();
    }

    

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
    return (
      <div className="WordSearch">
        <section>
          <h1>What word are you searching for?</h1>
          <form onSubmit={handlesubmit} className="searchForm">
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">Suggestions: sunset, sun, star...</div>
        </section>
        <Results results={results} />
      </div>
    );
} else {
load();
return "Loading...";
}
}