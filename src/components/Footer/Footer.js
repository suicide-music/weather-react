import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <div className="author">
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/viktorija-koluzajeva/"
            target="_blank"
            rel="noreferrer"
          >
            Viktorija Koluzajeva
          </a>
          <br />
          <a
            href="https://github.com/suicide-music/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
