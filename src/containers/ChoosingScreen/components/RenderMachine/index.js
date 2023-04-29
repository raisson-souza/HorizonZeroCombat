import React from "react"
import "./styles.css"

function Machine({
    choosingMachine,
    playerSet,
    P1,
    P2,
    SetP1,
    SetP2,
    machineName,
    machineImage = null,
    iconName = null,
    iconImage = null
}) {
    return (
        <div
            className="choosing-player"
            onClick={ () => {
                choosingMachine(playerSet, P1, SetP1, P2, SetP2, machineName)
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
            <p>{ machineName }</p>
        </div>
    )
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
