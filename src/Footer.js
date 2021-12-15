import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        This was coded by{" "}
        <a href="https://github.com/sbosh1991/dictionary-react-project">
       Sbosh{" "}
        </a>
        and is open-sourced on Github   <FaGithub className="mb-1"/> 
      </footer>
    </div>
  );
}
