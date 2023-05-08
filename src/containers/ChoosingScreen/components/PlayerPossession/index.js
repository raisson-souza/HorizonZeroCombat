import React from "react"
import "./styles.css"

function PlayerPossesion({playerNumber, isMachine = false}) {
    return (
        <div 
            className={
                isMachine
                    ? "choosing-possession-machine choosing-possession"
                    : "choosing-possession-player choosing-possession"
            }
        >
            <p>{ renderPlayer(playerNumber, isMachine) }</p>
        </div>
    )
}

const renderPlayer = (playerNumber, isMachine) => {
    if (isMachine) return "COMPUTADOR"
    else return `P${ playerNumber }`
}

export default PlayerPossesion
