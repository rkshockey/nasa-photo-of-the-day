import React from 'react'
import MediaDisplay from './mediaDisplay'

function SelectedDate (props) {
    const { date, currentData } = props
    return (
        <div className='selected-date'>
            <h3>{date}</h3>
            <h2>{currentData.title}</h2>
            <MediaDisplay type={currentData.media_type} url={currentData.url} />
            <p>{currentData.explanation}</p>
        </div>
    )
}

export default SelectedDate