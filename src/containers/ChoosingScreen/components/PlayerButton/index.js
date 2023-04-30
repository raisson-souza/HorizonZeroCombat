import React from "react"
import "./styles.css"

// FUNCTIONS
import ToTitle from "../../../../functions/ToTitle"

function PlayerButton({
    playerSet,
    setPlayer,
    player,
}) {
    return (
        <div className="choosing-p1">
            <div
                className={ renderPlayerChoosing(playerSet) }
                onClick={ () => { choosingPlayer(playerSet, setPlayer) } }
            >
                <p id="choosing-player">PLAYER 01</p>
                <p id="choosing-machine">
                    { renderPlayerMachine(player) }
                </p>
            </div>
        </div>
    )
}

const renderPlayerChoosing = (playerSet) => {
    return playerSet === 1
        ? `choosing-p1-box choosing-player-box-activated`
        : `choosing-p1-box choosing-player-box-deactivated`
}

const choosingPlayer = (playerSet, setPlayer) => {
    if (1 !== playerSet) {
        setPlayer(1)
    }
}

const renderPlayerMachine = (playerMachine) => {
    return playerMachine === ''
        ? '- - -'
        : ToTitle(playerMachine)
}

export default PlayerButton
