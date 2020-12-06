import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom'

import { baseURL, config } from "./services"

import Homepage from './components/Homepage';
import Nav from './components/Nav';
import CabinPages from './components/CabinPages';
import LakeHistory from './components/LakeHistory';

import './App.css';

function App() {
  const [cabins, setCabins] = useState([]);

  const getCabins = async () => {
    const resp = await axios.get(baseURL, config)
    console.log(resp);
    setCabins(resp.data.records);
  }

  useEffect(() => {
    getCabins()
  },[])
  

  return (
    <div className="App">
      <Nav />
      <Route exact path='/'>
        <Homepage cabins={cabins} />
      </Route>
      <Route path='/history'>
        <LakeHistory />
      </Route>
      <Route path='/messages'>
        <CabinPages />
      </Route>

    </div>
  );
}

export default App;
