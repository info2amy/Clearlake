import React from "react";
import "./Homepage.css";

const Homepage = (props) => {
  const cabinPage = props.cabins.map((cabinPage) => {
    return <li>{cabinPage.fields.cabin}</li>;
  });

  return (
    <div>
      <h1>Clearlake!</h1>
      <ul>{cabinPage}</ul>
    </div>
  );
};

export default Homepage;
