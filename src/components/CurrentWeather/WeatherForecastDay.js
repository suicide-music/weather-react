import React from "react";
import Icon from "./Icon";

export default function WeatherForecastDay(props) {
  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div>{day()} </div>
      <div>
        <Icon data={props.data.weather[0].icon} size={30} />
      </div>
      <div></div>
      <span>
        <strong>{Math.round(props.data.temp.max)}°</strong>{" "}
      </span>
      <span>{Math.round(props.data.temp.min)}°</span>
    </div>
  );
}
