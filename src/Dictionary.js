import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import img from "./images/smd.png";
import Photos from "./Photos";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setphotos] = useState(null)



  function handleresponse(response) {
    setResults(response.data[0])
  }


  function handlePexelsResponse(response){

    setphotos(response.data.photos)
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleresponse);

    const pexelsApiKey = "563492ad6f9170000100000164f2af03569b407ca658f33c4579170b";
    const pexelApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
   
     axios.get(pexelApiUrl, { headers: {"Authorization" : `Bearer ${pexelsApiKey}`}, 
     })
     .then(handlePexelsResponse);
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
      <Photos photos={photos}/>
    </div>
  );
}
