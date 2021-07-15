import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { base_url, api_key } from './constants'
import calendarD from './datesDummy'
import converter from './dateConverter'
import YearTab from './Components/year'
import MonthTab from './Components/month'
import SelectedDate from './Components/selectedDate'
import CardBlock from './Components/cardBlock'
import styled from 'styled-components'

const StyledContainer = styled.div`
  text-align: center;
  color: ${props => props.theme.black};
  background: ${props => props.theme.genBack};
  padding: 2%;
  box-sizing: border-box;
`

function App() {
  const [year, setYear] = useState(`2021`);
  const [month, setMonth] = useState(`Jul`);
  const [date, setDate] = useState(`2021-07-15`);
  const [nasaData, setNasaData] = useState([]);
  const [currentData, setCurrentData] = useState({});
  const [calendar, setCalendar] = useState(calendarD);
  const [currentCal, setCurrentCal] = useState(calendar[2021][`Jul`]);

  useEffect(() => {
    setCurrentCal(calendar[year][month])
  }, [year, month])

  useEffect(() => {
    const monthB = converter(month)
    axios.get(`${base_url}?start_date=${year}-${monthB}-01&end_date=${year}-${monthB}-${currentCal}&api_key=${api_key}`)
      .then(res => setNasaData(res.data))
      .catch(err => console.log(err))
  }, [currentCal])

  useEffect(() => {
    for (let i = 0; i < nasaData.length; i++){
      if (nasaData[i].date === date){
        setCurrentData(nasaData[i])
      }
    }
  }, [date, nasaData])

  function pickDate (date){
    setDate(date)
  }

  return (
    <StyledContainer>
      <h1>NASA Astronomy Picture of the Day</h1>
      <YearTab setYear={setYear} calendar={calendar} />
      <MonthTab setMonth={setMonth} year={year} calendar={calendar} />
      <SelectedDate date={date} currentData={currentData} />
      <CardBlock nasaData={nasaData} year={year} month={month} pickDate={pickDate} />
    </StyledContainer>
  );
}

export default App;
