import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Calendar.css";

export default function Calendar() {
  return (
    <div className="calendar-page">
      <h3>See what's Happenin'!</h3>
      <div className="img1"></div>
      <div className="img2"></div>
      <div className="img3"></div>
      <Link to="/">
        <button>back to Homepage</button>
      </Link>
    </div>
  );
}
