import React from "react";
import {   FaVolumeUp } from "react-icons/fa"

export default function Phonetics(props){
    console.log(props.phonetics)
    return (
        <div className="Phonetics">
           
  <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
             <FaVolumeUp />   
            </a>
            <br />
            {props.phonetics.text}
           
          
        </div>
    )
}
