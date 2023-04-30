import React from "react"
import "./styles.css"

// COMPONENTS
import LoadingBar from "../../../../components/LoadingBar"

function LoadingComponent({ barCount }) {
    return (
        <div className="loading-bar-progress">
            <LoadingBar level={ barCount } />
            <p>Carregando...</p>
        </div>
    )
}

export default LoadingComponent
