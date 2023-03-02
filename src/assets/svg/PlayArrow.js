import React from "react";

function PlayArrow({
    size = 24,
    fill = "#000000",
    cursor = "auto",
    onClick = () => {},
    onMouseEnter = () => {},
    onMouseLeave = () => {}
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 96 960 960"
            height={ size }
            width={ size }
            fill={ fill }
            onClick={ onClick }
            onMouseEnter={ onMouseEnter }
            onMouseLeave={ onMouseLeave }
            style={ {
                cursor: cursor
            } }
        >
            <path d="M340.001 819.844V332.156L723.074 576 340.001 819.844ZM400 576Zm0 134 210.769-134L400 442v268Z"/>
        </svg>
    )
}

export default PlayArrow