import React, { useState } from "react";
import axios from "axios";
import "./CurrentWeather.css";
import EditedDate from "./EditedDate";
import Icon from "./Icon";
import Forecast from "./Forecast";
import Loader from "react-loader-spinner";

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
    let apiKey = "e04ed5ebec9aabea61d0d3944875e91f";
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

  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let unit = "units=metric";
    let apiKey = "e04ed5ebec9aabea61d0d3944875e91f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
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
            {weatherData.temperature}??C
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
          <button id="current-location-button" onClick={getPosition}>
            <i className="fas fa-map-marker-alt"></i>
          </button>
          <form onSubmit={handleSubmit}>
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
    return (
      <span>
        Loading...{" "}
        <Loader
          type="TailSpin"
          color="white"
          height={50}
          width={50}
          timeout={30000}
        />
      </span>
    );
  }
}
