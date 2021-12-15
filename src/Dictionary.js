import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import img from "./images/smd.png";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleresponse);
  }

  function handleresponse(response) {
    setResults(response.data[0]);
  }

  function handlewordchange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
    <header className="logo-header">
  <img src={img} className="img-fluid" alt="logo"/>
        </header>
        <section>
          <h1>What word do you want to look up?</h1>
       <form onSubmit={search}>
        <input type="search" onChange={handlewordchange} />
      </form>
      <div className="hint">
        Suggested keywords: Country, Earth, Dancing, Love...
      </div>
        </section>
      
      <Results results={results} />
    </div>
  );
}
