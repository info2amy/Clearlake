import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="navbar">
      <Link to="/"> Home</Link>
      <br />
      <Link to="/history">History of Clearlake</Link>
      <br />
      <button>Check local Weather</button>
      <br />
      <button>See Clearlake Calendar</button>
    </nav>
  );
}
