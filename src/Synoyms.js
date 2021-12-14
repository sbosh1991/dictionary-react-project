import React from "react";

export default function Synonyms(props){
   
   if (props.synonyms){
    return (<div className="Synonyms">
        <section>
  {props.synonyms.map(function(synonym, index){
            return (
                <ul key={index}>
                    <li>
                        {synonym}
                    </li>
                </ul>
            )
        })}
        </section>
      
    </div>)
   } else {
       return null;
   }

}