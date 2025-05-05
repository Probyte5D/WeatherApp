import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <div className="nav-links" id="navLnks">
          <i className="fa fa-times" onClick={() => {}}></i>
          <ul>
            <li><a href="#current-weather">HOME</a></li>
            <li><a href="#current-weather">CURRENT</a></li>
            <li><a href="#weather-forecast">FORECAST</a></li>
            <li><a href="#news">NEWS</a></li>
            <li><a href="#weather-map">MAP</a></li>
            <li><a href="#footer">SUBSCRIBE</a></li>
          </ul>
        </div>
        <i className="fa fa-bars" onClick={() => { /* logica per mostrare il menu */ }}></i>
      </nav>
      <h1 className="title">🌍<b>Weather Trend</b></h1>
      <p>Forecasting the future, understanding the trends.</p>
      {/* Qui potresti inserire anche una search bar se preferisci */}
    </header>
  );
}

export default Header;
