import React from "react";
import { Link, useParams } from "react-router-dom";
import "./CabinPages.css";

export default function CabinPages(props) {
  const { cabinID } = useParams();
  console.log(cabinID);

  const indivCabinInfo = props.cabins.find((cabin) => cabin.id === cabinID);
  console.log(indivCabinInfo);

  return (
    <div className="indiv-cabin">
      <h5>Clearlake * * * Clearlake</h5>
      {indivCabinInfo && (
        <>
          <h2>Hello {indivCabinInfo.fields.cabin} Family!</h2>
          <br />
          <h5>on {indivCabinInfo.fields.eventDate}</h5>
          <h3>{indivCabinInfo.fields.contributor}</h3>
          <p>added - {indivCabinInfo.fields.event}</p>
        </>
      )}
      <Link to="/">back to Homepage</Link>
    </div>
  );
}
