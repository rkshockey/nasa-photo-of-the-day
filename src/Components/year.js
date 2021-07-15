import React from "react";
import styled from 'styled-components'

const StyledYears = styled.div`
    background: ${({theme: { color1a }}) => color1a};
    padding: 2%;
    width: 80%;
    margin: 0 10%;
    display: flex;
    justify-content: space-around;
`
const StyledButton = styled.button`
    background: ${({theme: { color1b }}) => color1b};
    padding: 0.5%;
    font-weight: bold;
`
function YearTab(props){
    const { setYear, calendar } = props

    function click (year) {
        setYear(year)
    }

    function iterate (obj) {
        const buttons = []
        for (const property in obj) {
            buttons.push(property)
        }
        return buttons
    }

    const years = iterate(calendar)

    return (
        <StyledYears>
            {years.map(year => <StyledButton onClick={() => click(year)} key={year}>{year}</StyledButton>)}
        </StyledYears>
    )
}

export default YearTab