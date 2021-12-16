import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        This was coded by{" "}
        
      <a href="https://www.instagram.com/simply_green_lee/" target="_blank" rel="noreferrer">Sbosh</a>{" "}
        and is {" "}
       <a href="https://github.com/sbosh1991/dictionary-react-project" target="_blank" rel="noreferrer">open-sourced on Github </a>   <FaGithub className="mb-1"/> 
      </footer>
    </div>
  ); 
}
