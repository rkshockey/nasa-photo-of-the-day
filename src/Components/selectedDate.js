import React from 'react'
import MediaDisplay from './mediaDisplay'
import styled from 'styled-components'

const Explanation = styled.p`
    padding: 0 10%;
`

function SelectedDate (props) {
    const { date, currentData } = props
    return (
        <div className='selected-date'>
            <h3>{date}</h3>
            <h2>{currentData.title}</h2>
            <MediaDisplay type={currentData.media_type} url={currentData.url} />
            <Explanation>{currentData.explanation}</Explanation>
        </div>
    )
}

export default SelectedDate