import React from "react"
import "./styles.css"

const LoadingBar = ({ level }) => {
    return (
        <div className="loading-bar">
            <div className="loading-bar-divs">
                <div className={ level >= 1  ? "complete d1" : "d1" }></div>
                <div className={ level >= 2  ? "complete d2" : "d2" }></div>
                <div className={ level >= 3  ? "complete d3" : "d3" }></div>
                <div className={ level >= 4  ? "complete d4" : "d4" }></div>
                <div className={ level >= 5  ? "complete d5" : "d5" }></div>
                <div className={ level >= 6  ? "complete d6" : "d6" }></div>
                <div className={ level >= 7  ? "complete d7" : "d7" }></div>
                <div className={ level >= 8  ? "complete d8" : "d8" }></div>
                <div className={ level >= 9  ? "complete d9" : "d9" }></div>
                <div className={ level >= 10 ? "complete d0" : "d0" }></div>
            </div>
        </div>
    )
}

export default LoadingBar