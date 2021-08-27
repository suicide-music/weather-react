import React from "react";
import "./WindHumidity.css";

export default function WindHumidity() {
  return (
    <div className="WindHumidity">
      <div className="extra-info">
        Humidity: <span id="humidity">15</span>%
      </div>
      <div className="extra-info">
        Wind: <span id="wind">5</span>m/s
      </div>
    </div>
  );
}
