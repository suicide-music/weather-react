import React from "react";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Footer from "./components/Footer/Footer";
import SearchForm from "./components/SearchForm/SearchForm";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <CurrentWeather defaultCity="London" />

        <SearchForm />
        <Footer />
      </div>
    </div>
  );
}
