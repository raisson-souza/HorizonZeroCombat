import React from "react"
import "./styles.css"

// COMPONENTS
import LoadingBar from "../../../../components/LoadingBar"

function LoadingComponent({ barCount, barMax }) {
    return (
        <div className="loading-bar-progress">
            <LoadingBar level={ barCount } max={ barMax } />
            <p>Carregando...</p>
        </div>
    )
}

export default LoadingComponent
