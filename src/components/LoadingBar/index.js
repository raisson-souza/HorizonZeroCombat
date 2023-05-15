import React from "react"
import "./styles.css"

const LoadingBar = ({ level, max }) => {
    return (
        <progress
            value={ level }
            max={ max }
        />
    )
}

export default LoadingBar
