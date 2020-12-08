import React, { useState } from "react";
import { Link } from "react-router-dom";
import linkImage1 from "../images/lake1.jpg";
import "./Homepage.css";

export default function Homepage(props) {
  const images = [linkImage1];
  const [currImage, setCurrImage] = useState(images[0]);
  // set up function to change the currImage;
  // make sure that if it reaches the length of the array, that it starts again at the beginning;
  // setInterval, to call the function every "x" seconds;

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
    <div
      className="background"
      style={{ backgroundImage: `url(${currImage})` }}
    >
      <h1>Clearlake!</h1>
      <ul>{eachCabin}</ul>
    </div>
  );
}
