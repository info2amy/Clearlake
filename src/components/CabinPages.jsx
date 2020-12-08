import React from "react";
import { Link, useParams } from "react-router-dom";
import "./CabinPages.css";

export default function CabinPages(props) {
  // usePARAMS reads the ":cabinID" from the URL
  const { cabinID } = useParams();
  console.log(cabinID);

  // FIND finds the individual cabin information
  const indivCabinInfo = props.cabins.find((cabin) => cabin.id === cabinID);
  console.log(indivCabinInfo);

  // FILTER is filtering the events data
  const cabinEvents = props.events.filter(
    (event) => event.fields.cabin[0] === cabinID
  );
  console.log(cabinEvents);

  // MAP will map through the filtered events for the individual cabin, to render our events information
  const cabinEventsJSX = cabinEvents.map((event) => {
    return (
      <div>
        <br />
        <h5>on {event.fields.eventDate}</h5>
        <h3>{event.fields.contributor}</h3>
        <p>added - {event.fields.event}</p>
      </div>
    );
  });

  return (
    <div className="indiv-cabin">
      <h5>Clearlake * * * Clearlake</h5>
      {indivCabinInfo && (
        <>
          <h2>Hello {indivCabinInfo.fields.cabin} Family!</h2>
          {cabinEventsJSX}
        </>
      )}
      // Render AddCabinEvent form here AddCabinEvent();
      <Link to="/">back to Homepage</Link>
    </div>
  );
}
