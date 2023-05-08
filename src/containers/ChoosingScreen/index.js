import React, { useState } from "react"
import "./styles.css"

// ASSETS
import {
    WatcherImage,
    StriderImage,
    ScrapperImage,
    GrazerImage,
} from "../../assets/index"

// COMPONENTS
import Machine from "./components/Machine"
import PlayerButton from "./components/PlayerButton"
import MachineButton from "./components/MachineButton"
import FightButton from "./components/FightButton"

function ChoosingScreen({ setGameState }) {
    const [ playerSet, setPlayer ] = useState(1)
    const [ P1, SetP1 ] = useState('')
    const [ P2, SetP2 ] = useState('')
    const [ isP2Machine, setIsP2Machine ] = useState(false)

    const machinesList = [
        "watcher",
        "strider",
        "scrapper",
        "grazer",
    ]

    const machinesAndPathsList = [
        ["watcher", WatcherImage],
        ["strider", StriderImage],
        ["scrapper", ScrapperImage],
        ["grazer", GrazerImage],
    ]

    return (
        <div className="choosing-box">
            <header className="choosing-header">
                Horizon Zero Combat
            </header>
            <div className="choosing-players-box">
                <div className="choosing-players-messgage">
                    Escolha sua<br />Máquina
                </div>
                <div className="choosing-players-area">
                    {
                        RenderMachines(
                            playerSet,
                            P1,
                            P2,
                            SetP1,
                            SetP2,
                            machinesAndPathsList,
                            isP2Machine,
                        )
                    }
                </div>
            </div>
            <footer className="choosing-footer">
                <PlayerButton
                    playerSet={ playerSet }
                    setPlayer={ setPlayer }
                    player={ P1 }
                />
                <MachineButton
                    playerSet={ playerSet }
                    setPlayer={ setPlayer }
                    P2={ P2 }
                    SetP2={ SetP2 }
                    isP2Machine={ isP2Machine }
                    setIsP2Machine={ setIsP2Machine }
                    P1={ P1 }
                    machinesList={ machinesList }
                />
                <div className="choosing-footer-area">
                    <FightButton
                        P1={ P1 }
                        P2={ P2 }
                        setGameState={ setGameState }
                    />
                </div>
            </footer>
        </div>
    )
}

const RenderMachines = (
    playerSet,
    P1,
    P2,
    SetP1,
    SetP2,
    machinesList,
    isP2Machine,
    iconsList = null,
) => {
    return [...Array(machinesList.length)].map((_, i) => (
        <Machine
            playerSet={ playerSet }
            P1={ P1 }
            P2={ P2 }
            SetP1={ SetP1 }
            SetP2={ SetP2 }
            machineName={ machinesList[i][0] }
            machineImage={ machinesList[i][1] }
            iconName={ iconsList != null ? iconsList[i][0] : null }
            iconImage={ iconsList != null ? iconsList[i][1] : null }
            isP2Machine={ isP2Machine }
            key={ i }
        />
    ))
}

export default ChoosingScreen
