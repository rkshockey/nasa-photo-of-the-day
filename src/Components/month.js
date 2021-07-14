import React from "react";;

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
        <div className='months'>
            {months.map(month => <button onClick={() => click(month)} key={month}>{month}</button>)}
        </div>
    )
}

export default MonthTab