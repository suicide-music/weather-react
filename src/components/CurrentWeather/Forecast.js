import React from "react";
import Icon from "./Icon";

export default function Forecast() {
  return (
    <div className="Forecast row">
      <div className="col-3">
        <div>Tue</div>
        <div>
          <Icon data="01d" size={30} />
        </div>
        <div></div>
        <span>14C </span>
        <span>20C</span>
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
