import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <form>
        <button id="current-location-button">
          <i className="fas fa-map-marker-alt"></i>
        </button>
        <input
          type="text"
          placeholder="Change city"
          className="city-search"
          id="city-input"
        />
        <input
          type="submit"
          value="Search"
          className="city-search"
          id="submit-button"
        />
      </form>
    </div>
  );
}
