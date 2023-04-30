import React, { useState } from "react"
import "./styles.css"

// functions
import ToTitle from "../../functions/ToTitle"

// assets
import watcherImage from "../../assets/images/machines/watcher.webp"
import striderImage from "../../assets/images/machines/strider.webp"
import scrapperImage from "../../assets/images/machines/scrapper.webp"
import grazerImage from "../../assets/images/machines/grazer.webp"

// components
import Machine from "./components/RenderMachine"
import PlayerButton from "./components/PlayerButton"

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
                            choosingMachine, // deveria ficar lá
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
                    <p
                        onClick={ () => { startFight(P1, P2, setGameState) } }
                    >
                        FIGHT !
                    </p>
                </div>
            </footer>
        </div>
    )
}

const RenderMachines = (
    choosingMachine,
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
            choosingMachine={ choosingMachine }
            playerSet={ playerSet }
            P1={ P1 }
            P2={ P2 }
            SetP1={ SetP1 }
            SetP2={ SetP2 }
            machineName={ machinesList[i][0] }
            machineImage={ machinesList[i][1] }
            iconName={ iconsList != null ? iconsList[i][0] : null }
            iconImage={ iconsList != null ? iconsList[i][1] : null }
        />
    ))
}

const startFight = (P1, P2, setGameState) => {
    if (P1 === "" && P2 === "") {
        alert("Nenhum máquina escolhida por nenhum jogador!")
    } else if (P1 === "") {
        alert("Jogador 1 não escolheu uma máquina!")
    } else if (P2 === "") {
        alert("Jogador 2 não escolheu uma máquina!")
    } else {
        setTimeout(() => {
            setGameState("battle")
        }, 1000)
    }
}

const choosingMachine = (playerSet, P1, setP1, P2, SetP2, machine) => {
    if (playerSet === 1) {
        if (machine === P2) {
            alert(`${ ToTitle(machine) } já foi escolhido pelo jogador 2!`)
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

export default ChoosingScreen