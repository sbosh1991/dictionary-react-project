import React from "react";
import Synonyms from "./Synoyms";
import "./Meaning.css";

export default function Meaning(props) {

  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            
              <div className="definition">
              {definition.definition}
              </div>
             
              <div className="example mb-3">
              {definition.example}
              </div>
  
            {definition.synonym}
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}

