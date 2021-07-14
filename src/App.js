import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { base_url, api_key } from './constants'
import calendarD from './datesDummy'
import converter from './dateConverter'
import YearTab from './Components/year'

function App() {
  const [year, setYear] = useState(`2021`);
  const [month, setMonth] = useState(`07`);
  const [date, setDate] = useState(`2021-07-14`);
  const [nasaData, setNasaData] = useState([]);
  const [calendar, setCalendar] = useState(calendarD);
  const [currentCal, setCurrentCal] = useState(calendar[2021][`Jul`]);

  useEffect(() => {
    axios.get(`${base_url}?start_date=${year}-${month}-01&end_date=${year}-${month}-${currentCal}&api_key=${api_key}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, [currentCal])

  useEffect(() => {
    const monthB = converter(month)
    setCurrentCal(calendar[year][monthB])
  }, [year, month])

  return (
    <div className="container">
      <h1>NASA Astronomy Picture of the Day</h1>
      <YearTab setYear={setYear} calendar={calendar} />
    </div>
  );
}

export default App;
