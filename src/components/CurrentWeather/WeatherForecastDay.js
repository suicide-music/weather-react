import React from "react";
import Icon from "./Icon";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div>{props.data.dt}</div>
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
