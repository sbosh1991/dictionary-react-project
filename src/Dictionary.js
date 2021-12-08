import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("null");

  function search(event) {
    event.preventDefault();
    alert(`searching for ${word} definition`);
  }

  function handlewordchange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handlewordchange} />
      </form>
    </div>
  );
}
