import React from 'react'

function SelectedDate (props) {
    const { date, currentData } = props

    return (
        <div className='selected-date'>
            <p>Current date is {date}</p>
            <p>Selected data will go here</p>
        </div>
    )
}

export default SelectedDate