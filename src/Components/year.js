import React from "react";;

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
        <div className='years'>
            {years.map(year => <button onClick={() => click(year)} key={year}>{year}</button>)}
        </div>
    )
}

export default YearTab