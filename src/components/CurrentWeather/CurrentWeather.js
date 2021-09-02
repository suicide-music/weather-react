import React, { useState } from "react";
import axios from "axios";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  let [temperature, setTemperature] = useState("null");
  let [ready, setReady] = useState("false");
  let [humidity, setHumidity] = useState("null");
  let [wind, setWind] = useState("null");
  function handleResponse(response) {
    setReady(true);
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
  }

  if (ready === true) {
    return (
      <div className="CurrentWeather">
        <div className="CityDate">
          <h1>London</h1>
          <h2>Monday 15:00</h2>
        </div>
        <div className="row temperature-all">
          <div className="current-weather col-12" id="description">
            Clear <i className="fas fa-sun"></i>
          </div>

          <div className="current-temperature col-12" id="current-temp">
            {temperature}°C
          </div>
        </div>
        <div className="WindHumidity">
          <div className="extra-info">
            Humidity: <span id="humidity">{humidity}</span>%
          </div>
          <div className="extra-info">
            Wind: <span id="wind">{wind} </span>m/s
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "b9d5278f163570dd5cc1638d250bbe97";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
    return "Loading...";
  }
}
