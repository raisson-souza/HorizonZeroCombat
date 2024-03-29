import React from "react"

function ComputerIcon({
    size = 24,
    fill = "#000000",
    cursor = "auto",
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={ size }
            width={ size }
            fill={ fill }
            style={ {
                cursor: cursor
            } }
        >
            <path d="M2 21q-.425 0-.712-.288Q1 20.425 1 20t.288-.712Q1.575 19 2 19h20q.425 0 .712.288.288.287.288.712t-.288.712Q22.425 21 22 21Zm2-3q-.825 0-1.412-.587Q2 16.825 2 16V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v11q0 .825-.587 1.413Q20.825 18 20 18Zm0-2h16V5H4v11Zm0 0V5v11Z"/>
        </svg>
    )
}

export default ComputerIcon