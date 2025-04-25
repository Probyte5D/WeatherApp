import React, { useState, useEffect } from "react";
import axios from "axios";

const Forecast = ({ coords }) => {
  const [forecast, setForecast] = useState([]); // Inizializza con un array vuoto
  const [loading, setLoading] = useState(true); // Stato per gestire il caricamento

  const fetchForecastData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=3231b0445e3d51085538b0befe668db4&units=metric`
      );

      const dailyForecast = response.data.list.reduce((acc, current) => {
        const day = current.dt_txt.split(" ")[0];
        if (!acc[day]) {
          acc[day] = current;
        }
        return acc;
      }, {});

      const forecastArray = Object.values(dailyForecast).filter(day => new Date(day.dt_txt) >= new Date());
      setForecast(forecastArray);
    } catch (error) {
      console.error("Errore nel recupero della previsione:", error);
    } finally {
      setLoading(false); // Imposta lo stato di caricamento su false dopo il completamento
    }
  };

  useEffect(() => {
    if (coords) {
      fetchForecastData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Esegui solo una volta al montaggio del componente

  if (loading && forecast.length === 0) {
    return <div>Caricamento previsione...</div>;
  }

  const daysOfTheWeek = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];

  const getFormattedDate = (dateString) => {
    const date = new Date(dateString);
    const dayOfWeek = daysOfTheWeek[date.getDay()];
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    return `${dayOfWeek}, ${day} ${month}`;
  };

  const getWeatherIcon = (description) => {
    switch (description.toLowerCase()) {
      case "clear sky":
        return "wi wi-day-sunny";
      case "few clouds":
        return "wi wi-day-cloudy";
      case "scattered clouds":
        return "wi wi-cloud";
      case "broken clouds":
        return "wi wi-cloudy";
      case "shower rain":
        return "wi wi-showers";
      case "rain":
        return "wi wi-rain";
      case "thunderstorm":
        return "wi wi-thunderstorm";
      case "snow":
        return "wi wi-snow";
      case "mist":
        return "wi wi-fog";
      default:
        return "wi wi-na";
    }
  };

  return (
    <div id="weather-forecast">
      <h3>Previsioni per i prossimi giorni:</h3>
      <div className="daily-forecast">
        {forecast.length > 0 ? (
          forecast.map((day, index) => (
            <div key={index} className="daily-forecast-item">
              <div className="date">{getFormattedDate(day.dt_txt)}</div>
              <div className="weatherIcon">
                <i className={getWeatherIcon(day.weather[0].description)}></i>
              </div>
              <div className="temperature">{Math.round(day.main.temp)}°C</div>
              <div className="description">{day.weather[0].description}</div>
            </div>
          ))
        ) : (
          <div>Nessuna previsione disponibile.</div>
        )}
      </div>
    </div>
  );
};

export default Forecast;
