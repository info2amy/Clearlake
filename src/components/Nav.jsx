import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="navbar">
      <Link to="/">
        <button>Homepage</button>
      </Link>
      <br />
      <Link to="/history">
        <button>History of Clearlake</button>
      </Link>
      <br />
      <Link to="/calendar">
        <button>Clearlake Calendar</button>
      </Link>
      <br />
      <Link to="/weather">
        <button>Check local Weather</button>
      </Link>
    </nav>
  );
}
