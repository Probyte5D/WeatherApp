import React from "react";

function News() {
  // Dati fittizi aggiornati per le notizie
  const newsData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1665311585152-8695e86040de?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sole Splendente: Nuove Proiezioni Meteo",
      text: "Gli esperti annunciano una giornata radiosa con temperature piacevoli in tutta la regione. Scopri cosa aspettarti per oggi.",
      time: "Aggiornato 5 minuti fa",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1576613775061-75e52d6e6b0e?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Tempesta in Arrivo: Preparati!",
      text: "Le previsioni meteorologiche segnalano possibili perturbazioni nel pomeriggio. Ecco i consigli per proteggersi e restare informati.",
      time: "Aggiornato 10 minuti fa",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1682218020756-e9953d49528d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Piogge Persistenti: Impatto sul Traffico",
      text: "Piogge ininterrotte potrebbero rallentare il traffico nelle principali città. Leggi di più sui consigli per la guida in sicurezza.",
      time: "Aggiornato 15 minuti fa",
    },
  ];

  return (
    <div>
      <h2 className="section-title">
        <i className="wi wi-day-sunny"></i> Weather Headlines
      </h2>
      <div className="news-grid">
        {newsData.map((news) => (
          <div key={news.id} className="news-card">
            <a href="#!">
              <img className="news-image" src={news.image} alt={news.title} />
            </a>
            <div className="news-content">
              <h5>{news.title}</h5>
              <p>{news.text}</p>
            </div>
            <div className="news-footer">
              <small>{news.time}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
