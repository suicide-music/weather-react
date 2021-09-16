import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import Loader from "react-loader-spinner";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded === true) {
    return (
      <div className="Forecast row">
        <div className="col-3">
          <WeatherForecastDay data={forecast[0]} />
        </div>
        <div className="col-3">
          <WeatherForecastDay data={forecast[1]} />
        </div>
        <div className="col-3">
          <WeatherForecastDay data={forecast[2]} />
        </div>
        <div className="col-3">
          <WeatherForecastDay data={forecast[3]} />
        </div>
        <div className="col-3">
          <WeatherForecastDay data={forecast[4]} />
        </div>
      </div>
    );
  } else {
    let apiKey = `e04ed5ebec9aabea61d0d3944875e91f`;
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <span>
        Loading...{" "}
        <Loader
          type="TailSpin"
          color="white"
          height={100}
          width={100}
          timeout={30000}
        />
      </span>
    );
  }
}
