import React from "react"
import "./styles.css"
import "react-tooltip/dist/react-tooltip.css"

// FUNCTIONS
import ToTitle from "../../../../functions/ToTitle"
import RandomNumber from "../../../../functions/RandomNumber"

// ASSETS
import { ComputerIconSvg } from "../../../../assets/index"

// COMPONENTS
import { Tooltip } from "react-tooltip"

function MachineButton({
    playerSet,
    setPlayer,
    P2,
    SetP2,
    isP2Machine,
    setIsP2Machine,
    P1,
    machinesList,
}) {
    const color = isP2Machine ? "purple" : "black"

    return (
        <div className="choosing-p2">
            <div style={{ margin: 2 }}>
                <div
                    className={ renderPlayerChoosing(playerSet) }
                    onClick={ () => { choosingPlayer(playerSet, setPlayer) } }
                >
                    <div
                        className="computer-icon"
                        style={ { border: isP2Machine ? `2px ${ color } solid` : "2px black solid" } }
                        onClick={ () => { machineChoosing(isP2Machine, setIsP2Machine, P1, P2, SetP2, machinesList) } }
                    >
                        <ComputerIconAndTootip
                            isP2Machine={ isP2Machine }
                            color={ color }
                        />
                    </div>
                    <p id="choosing-player">
                        { renderPlayer(isP2Machine) }
                    </p>
                    <p id="choosing-machine">
                        { renderPlayerMachine(P2) }
                    </p>
                </div>
            </div>
        </div>
    )
}

const ComputerIconAndTootip = ({ isP2Machine, color }) => {
    return (
        <>
            <a
                data-tooltip-content="Jogar contra o computador"
                data-tooltip-id="computer-icon-tooltip"
                href=" "
                onClick={ (e) => { e.preventDefault() } }
            >
                <ComputerIconSvg
                    fill={ isP2Machine ? color : "black" }
                />
            </a>
            <Tooltip id="computer-icon-tooltip" />
        </>
    )
}

const machineChoise = (P1, P2, SetP2, machinesList) => {
    while (true) {
        const number = RandomNumber(machinesList.length - 1, 0)
        if (P1 !== machinesList[number] && P2 !== machinesList[number]) return SetP2(machinesList[number])
    }
}

const machineChoosing = (isP2Machine, setIsP2Machine, P1, P2, SetP2, machinesList) => {
    if (isP2Machine) return setIsP2Machine(false)

    setIsP2Machine(true)

    if (P2 === "") machineChoise(P1, P2, SetP2, machinesList)
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

const renderPlayer = (isP2Machine) => {
    return isP2Machine
        ? "COMPUTADOR"
        : "PLAYER 02"
}

export default MachineButton
