import React from "react";
import Icon from "./Icon";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response);
  }

  let apiKey = `b9d5278f163570dd5cc1638d250bbe97`;
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Forecast row">
      <div className="col-3">
        <div>Tue</div>
        <div>
          <Icon data="01d" size={30} />
        </div>
        <div></div>
        <span>
          <strong>19°</strong>{" "}
        </span>
        <span>20°</span>
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
}
