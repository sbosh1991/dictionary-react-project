import React from "react";
import Synonyms from "./Synoyms";

export default function Meaning(props) {

  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong>
              {definition.definition}
              <br />
              <strong>Example:</strong>
              <em>{definition.example}</em>
            </p>
            {definition.synonyms}
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}

