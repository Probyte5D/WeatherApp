import React, { useEffect, useState } from "react";
import "./Style.css";

function Details({
  temp,
  humidity,
  pressure,
  weatherType,
  name,
  speed,
  country,
  sunset,
  feelsLike,
  bgVideo
}) {
  const [weatherState, setWeatherState] = useState("");

  useEffect(() => {
    if (weatherType) {
      switch (weatherType) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        case "Rain":
          setWeatherState("wi-day-rain");
          break;
        default:
          setWeatherState("wi-day-sunny");
      }
    }
  }, [weatherType]);

  const dateObj = new Date(sunset * 1000);
  const timeStr = `${dateObj.getHours()}:${dateObj.getMinutes()}`;

  return (
    <div className="details-container">
      {/* Video di sfondo nel container */}
      {bgVideo && (
  <video key={bgVideo} className="background" autoPlay loop muted playsInline>
    <source src={bgVideo} type="video/mp4" />
  </video>
)}

      <article className="widget">
        <div className="topRow">
          <div className="weatherIcon">
            <i className={`wi ${weatherState}`}></i>
          </div>
          <div className="weatherInfo">
            <div className="temperature">
              <span>{temp}&deg;</span>
            </div>
            <div className="description">
              <div className="weatherCondition">{weatherType}</div>
              <div className="place">
                {name}, {country}
              </div>
            </div>
          </div>
        </div>

        <div className="date">{new Date().toLocaleDateString()}</div>

        <div className="bottomRow">
          <div className="sunsetSection">
            <i className="wi wi-sunset"></i>
            <p>
              {timeStr} PM <br /> Sunset
            </p>
          </div>

          <div className="extra-temp">
            <div className="two-sided-section">
              <p><i className="wi wi-humidity"></i></p>
              <p className="extra-info-leftside">
                {humidity} <br /> Humidity
              </p>
            </div>
            <div className="two-sided-section">
              <p><i className="wi wi-rain"></i></p>
              <p className="extra-info-leftside">
                {pressure} <br /> Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p><i className="wi wi-strong-wind"></i></p>
              <p className="extra-info-leftside">
                {speed} <br /> Wind Speed
              </p>
            </div>
            <div className="two-sided-section">
              <p><i className="wi wi-thermometer"></i></p>
              <p className="extra-info-leftside">
                {feelsLike ?? temp} <br /> Feels Like
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Details;
