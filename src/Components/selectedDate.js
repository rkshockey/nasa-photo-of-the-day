import React from 'react'
import { scifi_url } from '../constants'

function SelectedDate (props) {
    const { date, currentData } = props
    return (
        <div className='selected-date'>
            <p>Current date is {date}</p>
            <h2>{currentData.title}</h2>
            <img src={currentData.media_type === 'image' ? currentData.url : scifi_url} />
            <p>{currentData.explanation}</p>
        </div>
    )
}

export default SelectedDate