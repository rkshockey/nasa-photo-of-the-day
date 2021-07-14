import React from 'react'
import { scifi_url } from '../constants'

function DateCard (props) {
    const { date, media_type, url, pickDate } = props

    return (
        <div className='card' onClick={() => pickDate(date)}>
            <p>{date}</p>
            <img src={media_type === 'image' ? url : scifi_url} />
        </div>
    )
}

export default DateCard