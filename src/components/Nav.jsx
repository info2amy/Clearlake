import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="navbar">
      <Link to="/">Homepage</Link>
      <br />
      <Link to="/history">History of Clearlake</Link>
    </nav>
  );
}
