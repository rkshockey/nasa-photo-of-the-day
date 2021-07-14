import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { base_url, api_key } from './constants'
import calendarD from './datesDummy'
import converter from './dateConverter'
import YearTab from './Components/year'
import MonthTab from './Components/month'

function App() {
  const [year, setYear] = useState(`2021`);
  const [month, setMonth] = useState(`Jul`);
  const [date, setDate] = useState(`2021-07-14`);
  const [nasaData, setNasaData] = useState([]);
  const [calendar, setCalendar] = useState(calendarD);
  const [currentCal, setCurrentCal] = useState(calendar[2021][`Jul`]);

  useEffect(() => {
    setCurrentCal(calendar[year][month])
  }, [year, month])

  useEffect(() => {
    const monthB = converter(month)
    axios.get(`${base_url}?start_date=${year}-${monthB}-01&end_date=${year}-${monthB}-${currentCal}&api_key=${api_key}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }, [currentCal])

  return (
    <div className="container">
      <h1>NASA Astronomy Picture of the Day</h1>
      <YearTab setYear={setYear} calendar={calendar} />
      <MonthTab setMonth={setMonth} year={year} calendar={calendar} />
    </div>
  );
}

export default App;
