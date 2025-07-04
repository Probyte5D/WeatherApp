import React, { useEffect, useState } from "react";
import "./Style.css";
import Details from "./Details";
import Forecast from "./Forecast";

function SearchMain() {
  const [searchTerm, setSearchTerm] = useState("Rome, IT");
  const [tempInfo, setTempInfo] = useState({});
  const [coords, setCoords] = useState(null);
  const [bgVideo, setBgVideo] = useState("");
  const [videoList, setVideoList] = useState([]);

  const weatherVideos = {
    Clear: "/videos/mare.mp4",
    Clouds: "/videos/clouduno.mp4",
    Haze: "/videos/clouddue.mp4",
    Thunderstorm: "/videos/thunder.mp4",
    Snow: "/videos/snow.mp4"
   
  };

  const getWeatherInfo = async () => {
    try {
      const apiKey = process.env.REACT_APP_OPENWEATHERMAP_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=${apiKey}`;

      const res = await fetch(url);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weatherType } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset, feels_like } = data.sys;
      const { lat, lon } = data.coord;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherType,
        name,
        speed,
        country,
        sunset,
        feelsLike: feels_like
      };

      setTempInfo(myNewWeatherInfo);
      setCoords({ lat, lon });

  // Gestione della lista video
  const video = weatherVideos[weatherType] || weatherVideos.Default;
  const uniqueVideos = Array.from(new Set([video, ...Object.values(weatherVideos)]));
  setVideoList(uniqueVideos);
  setBgVideo(video || null); 
} catch (error) {
  console.log(error);
}
};
// Cambia il video visibile cambia il video ogni 5 sec
  useEffect(() => {
    if (videoList.length > 0) {
      const intervalId = setInterval(() => {
        const randomVideo = videoList[Math.floor(Math.random() * videoList.length)];
        setBgVideo(randomVideo); 
      }, 5000);

      return () => clearInterval(intervalId); 
    }
  }, [videoList]); 

  useEffect(() => {
    getWeatherInfo();
  }, []);

  // Gestisce il caricamento del video
  const handleVideoLoaded = () => {
    const videoElement = document.querySelector('.details-container video');
    videoElement.classList.add('active'); 
  };

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Type city name"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="searchButton" onClick={getWeatherInfo}>
            Search City
          </button>
        </div>
      </div>

      <Details {...tempInfo} bgVideo={bgVideo} />

      {coords && <Forecast coords={coords} />}

      <div className="details-container">
        <video
          src={bgVideo}
          autoPlay
          muted
          loop
          onLoadedData={handleVideoLoaded} 
        ></video>
      </div>
    </>
  );
}

export default SearchMain;
