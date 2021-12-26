import React, { useState} from "react";
import "./WordSearch.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function WordSearch(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] =useState(null);
    let [loaded, setLoaded] =useState(false);
    let [photos, setPhotos] =useState(null);

function handleResponse(response) {
    setResults(response.data[0]);
}

function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
}

function search() {
  // documentation: https://api.dictionaryapi.dev/
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiUrl).then(handleResponse);

  let pexelsApiKey = "563492ad6f917000010000011dc7d17d149e4864850b736a67444c5c";
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
let headers = { Authorization: `Bearer ${pexelsApiKey}`};
axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
          <div className="hint">Suggestions: sunset, sun, star...</div>
          <form onSubmit={handlesubmit} className="searchForm">
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
} else {
load();
return "Loading...";
}
}