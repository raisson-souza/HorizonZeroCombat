import React from "react"
import "./styles.css"

// FUNCTIONS
import ToTitle from "../../../../functions/ToTitle"

// ASSETS
import { ComputerIconSvg } from "../../../../assets/index"

function PlayerButton({
    playerSet,
    setPlayer,
    player,
    playerNumber,
    is2ndPlayer = false
}) {
    if (!is2ndPlayer) {
        return (
            <div className="choosing-p1">
                <div
                    className={ renderPlayerChoosing(playerSet, playerNumber) }
                    onClick={ () => { choosingPlayer(playerSet, setPlayer, playerNumber) } }
                >
                    <p id="choosing-player">{ `PLAYER 0${ playerNumber }` }</p>
                    <p id="choosing-machine">
                        { renderPlayerMachine(player) }
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="choosing-p2">
            <div style={{ margin: 2 }}>
                <div
                    className={ renderPlayerChoosing(playerSet, playerNumber) }
                    onClick={ () => { choosingPlayer(playerSet, setPlayer, playerNumber) } }
                >
                    <div className="computer-icon">
                        <ComputerIconSvg />
                    </div>
                    <p id="choosing-player">{ `PLAYER 0${ playerNumber }` }</p>
                    <p id="choosing-machine">
                        { renderPlayerMachine(player) }
                    </p>
                </div>
            </div>
        </div>
    )
}

const renderPlayerChoosing = (playerSet, playerNumber) => {
    return playerSet === playerNumber
        ? `choosing-p${ playerNumber }-box choosing-player-box-activated`
        : `choosing-p${ playerNumber }-box choosing-player-box-deactivated`
}

const choosingPlayer = (playerSet, setPlayer, playerOption) => {
    if (playerOption !== playerSet) {
        setPlayer(playerOption)
    }
}

const renderPlayerMachine = (playerMachine) => {
    return playerMachine === ''
        ? '- - -'
        : ToTitle(playerMachine)
}

export default PlayerButton