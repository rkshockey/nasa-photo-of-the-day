import React from 'react'
import DateCard from './dateCard'

function CardBlock (props){
    const { nasaData, year, month, pickDate } = props

    return (
        <div className='cards'>
            <h3>{month} {year}</h3>
            {nasaData.map(data => <DateCard date={data.date} media_type={data.media_type} url={data.url} pickDate={pickDate} key={data.date} />)}
        </div>
    )
}

export default CardBlock