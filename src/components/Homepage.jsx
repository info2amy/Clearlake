import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

export default function Homepage(props) {
  const eachCabin = props.cabins.map((cabin) => {
    console.log(cabin);
    return (
      <div className="indiv-cabin-list" key={cabin.id}>
        <h3>{cabin.fields.cabin}</h3>
        <Link to={`/indivCabin/${cabin.id}`}>go to Cabin page</Link>
        {/* <button>go to Cabin page</button> */}
      </div>
    );
  });

  return (
    <div>
      <h1>Clearlake!</h1>
      <ul>{eachCabin}</ul>
    </div>
  );
}
