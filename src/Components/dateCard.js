import React from 'react'
import { scifi_url } from '../constants'
import styled from 'styled-components'

const StyledCard = styled.div`
    width: 15%;
    box-sizing: border-box;
    border: 2px solid black;
    margin: 1%;
`
const StyledImg = styled.img`
    width: 100%;
    height: 12vh;
`


function DateCard (props) {
    const { date, media_type, url, pickDate } = props

    return (
        <StyledCard onClick={() => pickDate(date)}>
            <p>{date}</p>
            <StyledImg src={media_type === 'image' ? url : scifi_url} />
        </StyledCard>
    )
}

export default DateCard