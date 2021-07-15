import React from "react";
import styled from 'styled-components'

const StyledMonths = styled.div`
    background: ${({theme: { color2a }}) => color2a};
    padding: 2%;
    width: 80%;
    margin: 0 10%;
    display: flex;
    justify-content: space-around;
`
const StyledButton = styled.button`
    background: ${({theme: { color2b }}) => color2b};
    padding: 0.5%;
    font-weight: bold;
    color: white;
`

function MonthTab(props){
    const { setMonth, year, calendar } = props

    function click (month) {
        setMonth(month)
    }

    function iterate (obj) {
        const buttons = []
        for (const property in obj) {
            buttons.push(property)
        }
        return buttons
    }

    const months = iterate(calendar[`${year}`])

    return (
        <StyledMonths>
            {months.map(month => <StyledButton onClick={() => click(month)} key={month}>{month}</StyledButton>)}
        </StyledMonths>
    )
}

export default MonthTab