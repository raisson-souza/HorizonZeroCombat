import React, { useState } from "react"
import "./styles.css"

// ASSETS
import watcherImage from "../../assets/images/machines/watcher.webp"
import striderImage from "../../assets/images/machines/strider.webp"
import scrapperImage from "../../assets/images/machines/scrapper.webp"
import grazerImage from "../../assets/images/machines/grazer.webp"

// COMPONENTS
import Machine from "./components/RenderMachine"
import PlayerButton from "./components/PlayerButton"
import FightButton from "./components/FightButton"

function ChoosingScreen({ setGameState }) {
    const [ playerSet, setPlayer ] = useState(1)
    const [ P1, SetP1 ] = useState('')
    const [ P2, SetP2 ] = useState('')

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
                            [
                                ["watcher", watcherImage],
                                ["strider", striderImage],
                                ["scrapper", scrapperImage],
                                ["grazer", grazerImage],
                            ],
                        )
                    }
                </div>
            </div>
            <footer className="choosing-footer">
                <PlayerButton
                    playerSet={ playerSet }
                    setPlayer={ setPlayer }
                    player={ P1 }
                    playerNumber={ 1 }
                />
                <PlayerButton
                    playerSet={ playerSet }
                    setPlayer={ setPlayer }
                    player={ P2 }
                    playerNumber={ 2 }
                    is2ndPlayer
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
            key={ i }
        />
    ))
}

export default ChoosingScreen
