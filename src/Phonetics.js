import React from "react";
import {   FaVolumeUp } from "react-icons/fa"

export default function Phonetics(props){
   
    return (
        <div className="Phonetics">
           
  <a href={props.phonetics.audio} target="_blank" rel="noreferrer" >
             <FaVolumeUp size={50} color={"#D8B692"}/>   
            </a>
            <br />
            <div className="fs-2">
           {props.phonetics.text}
            </div>
           
           
          
        </div>
    )
}
