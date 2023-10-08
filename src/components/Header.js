import React from "react";
import TrollFace from "../assets/icons8-trollface-48.png";

const Header = () => {
  return (
    <header className="header">
      <img src={TrollFace} className="header--image" alt="Logo" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">Chavan G K | Web Developer</h4>
    </header>
  );
};

export default Header;
