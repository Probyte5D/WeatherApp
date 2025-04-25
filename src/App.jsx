import React from "react";
import "./components/Style.css";
import Header from "./components/Header";
import SearchMain from "./components/SearchMain";
import Forecast from "./components/Forecast";
import MapSection from "./components/MapSection";
import News from "./components/News";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header />
      <section id="current-weather">
        <SearchMain />
      </section>
      <section id="weather-forecast">
        <Forecast />
      </section>
      <section id="weather-map">
        <MapSection />
      </section>
      <section id="news">
        <News />
      </section>
      <Footer />
    </div>
  );
}

export default App;
