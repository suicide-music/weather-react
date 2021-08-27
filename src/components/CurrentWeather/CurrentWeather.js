import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="row temperature-all">
        <div className="current-weather col-12" id="description">
          Clear <i className="fas fa-sun"></i>
        </div>

        <div className="current-temperature col-12" id="current-temp">
          23°C
        </div>
      </div>
    </div>
  );
}
