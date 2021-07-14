import React from "react";
import "./App.css";
import axios from 'axios';
import { base_url, api_key } from './constants'

//Setting up git!

function App() {
  axios.get(`${base_url}?api_key=${api_key}`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
