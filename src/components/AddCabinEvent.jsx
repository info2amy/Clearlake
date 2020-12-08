import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./AddCabinEvent.css";

export default function AddCabinEvent(props) {
  const history = useHistory();

  const [cabinEvent, setCabinEvent] = useState({
    event: "",
    eventDate: "",
    contributor: "",
    cabin: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCabinEvent({
      ...cabinEvent,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    props.postCabinEventData(cabinEvent);
    props.triggerRefresh(!props.refresh);
    history.push("/");
  };

  return (
    <div className="submit-form">
      <h3>Add an event to your cabin's history log!:</h3>
      <form onSubmit={handleSubmit} className="create-form">
        <input
          className="input-event"
          type="text"
          placeholder="Event"
          name="event"
          value={cabinEvent.event}
          onChange={(e) => handleChange(e)}
        />
        <input
          className="input-date"
          type="text"
          placeholder="Date of the Event"
          name="eventDate"
          value={cabinEvent.eventDate}
          onChange={(e) => handleChange(e)}
        />
        <input
          className="input-contributor"
          type="text"
          placeholder="First & Last Name"
          name="contributor"
          value={cabinEvent.contributor}
          onChange={(e) => handleChange(e)}
        />
        <input
          className="input-cabin"
          type="text"
          placeholder="Your Cabin"
          name="cabin"
          value={cabinEvent.cabin}
          onChange={(e) => handleChange(e)}
        />
        <input className="input-btn" type="submit" value="Submit" />
      </form>
    </div>
  );
}
