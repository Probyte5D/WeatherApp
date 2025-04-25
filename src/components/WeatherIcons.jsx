const getWeatherIcon = (description) => {
  console.log("Descrizione meteo:", description); // Aggiungi un log per capire cosa ricevi
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
      return "wi wi-na"; // Fallback se non trova la descrizione
  }
};

