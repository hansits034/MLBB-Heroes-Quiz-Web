import React from "react";
import ig from "./PngImage/igss.png";
import tiktok from "./PngImage/tts.png";
import kofi from "./PngImage/kofis.png";
import guide from "./PngImage/guide.png";
import setting from "./PngImage/setting.png";

const Navbar = ({ setGameMode }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">MLBB Quiz</div>
        <div className="navbar-icons-left">
          <a>
            <img src={setting} alt="setting" className="icon" />
          </a>
          <a>
            <img src={guide} alt="guide" className="icon" />
          </a>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="dropdown">
          <button className="dropbtn">Game Mode</button>
          <div className="dropdown-content">
            <button onClick={() => setGameMode("Daily")}>Daily</button>
            <button onClick={() => setGameMode("Infinite")}>Infinite</button>
            <button onClick={() => setGameMode("Simulator")}>Simulator</button>
          </div>
        </div>
        <div className="navbar-icons">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={ig} alt="Instagram" className="icon" />
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
            <img src={tiktok} alt="TikTok" className="icon" />
          </a>
          <a href="https://ko-fi.com/mlbbq" target="_blank" rel="noopener noreferrer">
            <img src={kofi} alt="Ko-fi" className="icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
