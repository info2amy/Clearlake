import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather-page">
      <h3>Today is Sunny and Hot! (duh)</h3>
      <div className="img1">image1</div>
      <div className="img2">image2</div>
      <div className="img3">image3</div>
      <Link to="/">
        <button>back to Homepage</button>
      </Link>
    </div>
  );
}
