import React, { useState } from "react";
import Icon from "./Icon";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState("false");
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded === true) {
    console.log(forecast);
    return (
      <div className="Forecast row">
        <div className="col-3">
          <div>{forecast[0].dt}</div>
          <div>
            <Icon data={forecast[0].weather[0].icon} size={30} />
          </div>
          <div></div>
          <span>
            <strong>{Math.round(forecast[0].temp.max)}°</strong>{" "}
          </span>
          <span>{Math.round(forecast[0].temp.min)}°</span>
        </div>
        <div className="col-3">
          <div>Tue</div>
          <div>
            <Icon data="01d" size={30} />
          </div>
          <div>
            <span>14C </span>
            <span>20C</span>
          </div>
        </div>
        <div className="col-3">
          <div>Tue</div>
          <div>
            <Icon data="01d" size={30} />
          </div>
          <div>
            <span>14C </span>
            <span>20C</span>
          </div>
        </div>
        <div className="col-3">
          <div>Tue</div>
          <div>
            <Icon data="01d" size={30} />
          </div>
          <div>
            <span>14C </span>
            <span>20C</span>
          </div>
        </div>
        <div className="col-3">
          <div>Tue</div>
          <div>
            <Icon data="01d" size={30} />
          </div>
          <div>
            <span>14C </span>
            <span>20C</span>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `b9d5278f163570dd5cc1638d250bbe97`;
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
