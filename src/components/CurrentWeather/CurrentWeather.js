import React, { useState } from "react";
import axios from "axios";
import "./CurrentWeather.css";
import EditedDate from "./EditedDate";
import Icon from "./Icon";
import Forecast from "./Forecast";

export default function CurrentWeather(props) {
  let [weatherData, setWeatherData] = useState("null");
  let [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].main,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    let apiKey = "b9d5278f163570dd5cc1638d250bbe97";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready === true) {
    return (
      <div className="CurrentWeather">
        <div className="CityDate">
          <h1>{weatherData.city}</h1>
          <h2>
            <EditedDate date={weatherData.date} />
          </h2>
        </div>
        <div className="row temperature-all">
          <div className="current-weather col-12" id="description">
            {weatherData.description} <Icon data={weatherData.icon} size={40} />
          </div>

          <div className="current-temperature col-12" id="current-temp">
            {weatherData.temperature}°C
          </div>
        </div>
        <div className="WindHumidity">
          <div className="extra-info">
            Humidity: <span id="humidity">{weatherData.humidity}</span>%
          </div>
          <div className="extra-info">
            Wind: <span id="wind">{weatherData.wind}</span>m/s
          </div>
        </div>
        <Forecast coordinates={weatherData.coordinates} />
        <div className="SearchForm">
          <form onSubmit={handleSubmit}>
            <button id="current-location-button">
              <i className="fas fa-map-marker-alt"></i>
            </button>
            <input
              type="text"
              placeholder="Change city"
              className="city-search"
              id="city-input"
              onChange={handleCityChange}
            />
            <input
              type="submit"
              value="Search"
              className="city-search"
              id="submit-button"
            />
          </form>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
