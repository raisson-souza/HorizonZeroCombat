import React from "react"
import "./styles.css"

// FUNCTIONS
import ToTitle from "../../../../functions/ToTitle"

// ASSETS
import { ComputerIconSvg } from "../../../../assets/index"

function MachineButton({
    playerSet,
    setPlayer,
    player,
}) {
    return (
        <div className="choosing-p2">
            <div style={{ margin: 2 }}>
                <div
                    className={ renderPlayerChoosing(playerSet) }
                    onClick={ () => { choosingPlayer(playerSet, setPlayer) } }
                >
                    <div className="computer-icon">
                        <ComputerIconSvg />
                    </div>
                    <p id="choosing-player">PLAYER 02</p>
                    <p id="choosing-machine">
                        { renderPlayerMachine(player) }
                    </p>
                </div>
            </div>
        </div>
    )
}

const renderPlayerChoosing = (playerSet) => {
    return playerSet === 2
        ? `choosing-p2-box choosing-player-box-activated`
        : `choosing-p2-box choosing-player-box-deactivated`
}

const choosingPlayer = (playerSet, setPlayer) => {
    if (2 !== playerSet) {
        setPlayer(2)
    }
}

const renderPlayerMachine = (playerMachine) => {
    return playerMachine === ''
        ? '- - -'
        : ToTitle(playerMachine)
}

export default MachineButton
