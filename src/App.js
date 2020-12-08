import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom'

import { baseURL, config } from "./services"

import Homepage from './components/Homepage';
import Nav from './components/Nav';
import CabinPages from './components/CabinPages';
import LakeHistory from './components/LakeHistory';
import AddCabinEvent from "./components/AddCabinEvent";

import './App.css';

export default function App() {
  const [cabins, setCabins] = useState([]);
  const [events, setEvents] = useState([]);
  const [refresh, triggerRefresh] = useState(false);

  const getCabins = async () => {
    const resp = await axios.get(`${baseURL}/clearlake`, config)
    console.log(resp);
    setCabins(resp.data.records);
  };

  const getEvents = async () => {
    const resp = await axios.get(`${baseURL}/events`, config)
    console.log(resp);
    setEvents(resp.data.records);
  };

  useEffect(() => {
    getCabins()
    getEvents()
  },[refresh])

  return (
    <div className="App">
      <Nav />

      <Route exact path='/'>
        <Homepage cabins={cabins} />
      </Route>

      <Route path='/history'>
        <LakeHistory />
      </Route>

      <Route path='/indivCabin/:cabinID'>
        <CabinPages
          cabins={cabins}
          events={events}
          triggerRefresh={triggerRefresh}
          refresh={refresh}
        />
      </Route>

    </div>
  )
}

