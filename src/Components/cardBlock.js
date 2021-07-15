import React from 'react'
import DateCard from './dateCard'
import styled from 'styled-components'

const StyledCardBlock = styled.div`
    background: ${({theme: { color1a }}) => color1a};
    padding: 1%;
`

const StyledCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

function CardBlock (props){
    const { nasaData, year, month, pickDate } = props

    return (
        <StyledCardBlock>
            <h3>{month} {year}</h3>
            <StyledCards>
                {nasaData.map(data => <DateCard date={data.date} media_type={data.media_type} url={data.url} pickDate={pickDate} key={data.date} />)}
            </StyledCards>
        </StyledCardBlock>
    )
}

export default CardBlock