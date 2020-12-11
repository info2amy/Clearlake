import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

import "./AddCabinEvent.css";

export default function AddCabinEvent(props) {
  const history = useHistory();
  const { cabinID } = useParams();

  const [cabinEvent, setCabinEvent] = useState({
    event: "",
    eventDate: "",
    contributor: "",
    cabin: [cabinID],
  });

  const postCabinEventData = async () => {
    console.log(cabinEvent);
    const resp = await axios.post(
      `${baseURL}/events`,
      { fields: cabinEvent },
      config
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCabinEvent({
      ...cabinEvent,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postCabinEventData(cabinEvent);
    props.triggerRefresh(!props.refresh);
    inputClear();
  };

  const inputClear = () => {
    setCabinEvent({
      event: "",
      eventDate: "",
      contributor: "",
      cabin: [cabinID],
    });
  };

  return (
    <div className="submit-form">
      <h3>Add an event to your cabin's history log!:</h3>
      <br />
      <div className="submit-boxes">
        <form onSubmit={handleSubmit} className="create-form">
          <input
            className="input-event"
            type="text"
            placeholder="Event"
            name="event"
            value={cabinEvent.event}
            onChange={(e) => handleChange(e)}
            required
          />
          <input
            className="input-date"
            type="date"
            placeholder="Date of the Event"
            name="eventDate"
            value={cabinEvent.eventDate}
            onChange={(e) => handleChange(e)}
            required
          />
          <input
            className="input-contributor"
            type="text"
            placeholder="First & Last Name"
            name="contributor"
            value={cabinEvent.contributor}
            onChange={(e) => handleChange(e)}
            required
          />
          <input className="input-btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
