import React from "react";
import { Link } from "react-router-dom";
import "./LakeHistory.css";

export default function LakeHistory() {
  return (
    <div className="history-page">
      <div className="history-header">
        <h2>The Story of Clearlake</h2>
      </div>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        obcaecati dicta vitae libero voluptatum. Reprehenderit sequi molestiae
        praesentium? Possimus, eveniet. Libero, corrupti numquam cupiditate
        quisquam veniam aspernatur unde distinctio officia!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, sint
        aut! Nihil, minus. Animi, fugit eum incidunt quas at error, harum,
        maxime esse nulla vel atque? Laboriosam earum ab illo.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, sint
        aut! Nihil, minus. Animi, fugit eum incidunt quas at error, harum,
        maxime esse nulla vel atque? Laboriosam earum ab illo.
      </p>{" "}
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, sint
        aut! Nihil, minus. Animi, fugit eum incidunt quas at error, harum,
        maxime esse nulla vel atque? Laboriosam earum ab illo.
      </p>
      <br />
      <Link to="/">back to Homepage</Link>
    </div>
  );
}
