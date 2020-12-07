import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

export default function Homepage(props) {
  const eachCabin = props.cabins.map((cabin) => {
    console.log(cabin);
    return (
      <div key={cabin.id}>
        <li>{cabin.fields.cabin}</li>
        <Link to={`/indivCabin/${cabin.id}`}></Link>
      </div>
    );
  });

  return (
    <div>
      <h1>Clearlake!</h1>
      <ul>{eachCabin}</ul>
      {/* <Link to{`/indCabin/${cabin.id}`}>
      </Link> */}
    </div>
  );
}
