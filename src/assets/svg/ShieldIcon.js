import React from "react"

function ShieldIcon({
    size = 24,
    fill = "#000000",
    cursor = "auto"
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 96 960 960"
            height={ size }
            width={ size }
            fill={ fill }
            style={ {
                cursor: cursor
            } }
        >
            <path d="M480 955.229q-129.769-35.384-214.884-152.768Q180.001 685.076 180.001 540V309.847L480 197.54l299.999 112.307V540q0 145.076-85.115 262.461Q609.769 919.845 480 955.229Z"/>
        </svg>
    )
}

export default ShieldIcon