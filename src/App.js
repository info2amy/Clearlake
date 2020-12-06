import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom'

import { baseURL, config } from 

import Homepage from './components/Homepage';
import Nav from './components/Nav';
import CabinPages from './components/CabinPages';
import LakeHistory from './components/LakeHistory';

import './App.css';

function App() {
  const [message, setMessage] = useState([]);

  const getMessage = async () {
    const resp = await axios.get(baseURL, config)
    console.log(resp);
}

  useEffect(() => {
    getMessage
  },[])
  



  return (
    <div className="App">
      <Nav />
      <Route exact path='/'>
        <Homepage />
      </Route>
      <Route >
        <LakeHistory />
      </Route>


    </div>
  );
}

export default App;
