import React from "react"
import "./styles.css"

// FUNCTIONS
import ToTitle from "../../../../functions/ToTitle"

// COMPONENTS
import PlayerPossesion from "../PlayerPossession"

function Machine({
    playerSet,
    P1,
    P2,
    SetP1,
    SetP2,
    machineName,
    machineImage = null,
    iconName = null,
    iconImage = null,
    isP2Machine,
}) {
    return (
        <div
            className="choosing-player"
            onClick={ () => {
                choosingMachine(playerSet, P1, SetP1, P2, SetP2, machineName, isP2Machine)
            }}
        >
            <div
                className={ RenderClass(machineName) }
                style={ {
                    backgroundImage: `url(${ machineImage })`,
                    backgroundSize: RenderMachineSize(machineName),
                } }
            >
                { RenderIcon(iconName, iconImage) }
            </div>
            <p id="machine-name">{ machineName }</p>
            {
                renderMachinePossesion(P1, P2, machineName, isP2Machine)
            }
        </div>
    )
}

const renderMachinePossesion = (P1, P2, machineName, isP2Machine) => {
    if (P1 === machineName) {
        return (
            <PlayerPossesion
                playerNumber={ 1 }
            />
        )
    }
    else if (P2 === machineName){
        return (
            <PlayerPossesion
                playerNumber={ 2 }
                isMachine={ isP2Machine }
            />
        )
    }
    else {
        return null
    }
}

const choosingMachine = (playerSet, P1, setP1, P2, SetP2, machine, isP2Machine) => {
    if (playerSet === 1) {
        if (machine === P2) {
            alert(`${ ToTitle(machine) } já foi escolhido pelo ${ isP2Machine ? "computador" : "jogador 2"}!`)
        } else {
            if (machine !== P1) {
                setP1(machine)
            }
        }
    } else {
        if (machine === P1){
            alert(`${ ToTitle(machine) } já foi escolhido pelo jogador 1!`)
        } else {
            if (machine !== P2) {
                SetP2(machine)
            }
        }
    }
}

const RenderClass = (machineName) => {
    switch (machineName) {
        case "watcher":
            return "choosing-player01 choosing-player-config"
        case "strider":
            return "choosing-player02 choosing-player-config"
        case "scrapper":
            return "choosing-player03 choosing-player-config"
        case "grazer":
            return "choosing-player04 choosing-player-config"
        default:
            return "choosing-player01 choosing-player-config"
    }
}

const RenderIcon = (iconName, iconImage) => {
    if (iconName == null) return null

    return (
        <img src={ iconImage } height="20px" alt={ `${ iconName }-icon`} />
    )
}

const RenderMachineSize = (machineName) => {
    switch (machineName) {
        case "scrapper":
            return "120%"
        case "grazer":
            return "80%"
        default:
            return "107%"
    }
}

export default Machine
