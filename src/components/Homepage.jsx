import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import linkImage1 from "../images/lake1.jpg";
import linkImage2 from "../images/lake2.jpg";
import linkImage3 from "../images/lake3.jpg";
import linkImage4 from "../images/lake4.jpg";
import linkImage5 from "../images/lake5.jpg";
import linkImage6 from "../images/lake6.jpg";
// import linkImage7 from "../images/lake7.jpg";
// import linkImage8 from "../images/lake8.jpg";
// import linkImage9 from "../images/lake9.jpg";
// import linkImage10 from "../images/lak10.jpg";
import "./Homepage.css";

export default function Homepage(props) {
  const images = [
    linkImage1,
    linkImage2,
    linkImage3,
    linkImage4,
    linkImage5,
    linkImage6,
  ];
  // const [currImage, setCurrImage] = useState(images[0]);
  const [count, setCount] = useState(0);

  const slideShow = () => {
    console.log(count);
    if (count === images.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     slideShow();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [count]);

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
      style={{ backgroundImage: `url(${images[count]})` }}
    >
      <h1>Clearlake!</h1>
      <ul>{eachCabin}</ul>
    </div>
  );
}
