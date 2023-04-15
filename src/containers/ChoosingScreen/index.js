import React, { useState } from "react"
import "../Styles/styles.css"

import ComputerIcon from "../../assets/svg/ComputerIcon"
import ToTitle from "../../functions/ToTitle"
import ShieldIcon from "../../assets/svg/ShieldIcon"
import InfoIcon from "../../assets/svg/InfoIcon"
import SwordIcon from "../../assets/svg/SwordIcon.png"

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
                    <div
                        className="choosing-player"
                        onClick={ () => {
                            choosingMachine(playerSet, P1, SetP1, P2, SetP2, 'watcher')
                        }}
                    >
                        <div className="choosing-player01 choosing-player-config">
                            <img src={SwordIcon} height="20px" />
                        </div>
                        <p>Watcher</p>
                    </div>
                    <div className="choosing-player" onClick={ () => {
                        choosingMachine(playerSet, P1, SetP1, P2, SetP2, 'strider')
                    }
                    }>
                        <div className="choosing-player02 choosing-player-config" />
                        <p>Strider</p>
                    </div>
                    <div className="choosing-player" onClick={ () => {
                        choosingMachine(playerSet, P1, SetP1, P2, SetP2, 'scrapper')
                    }
                    }>
                        <div className="choosing-player03 choosing-player-config" />
                        <p>Scrapper</p>
                    </div>
                    <div className="choosing-player" onClick={ () => {
                        choosingMachine(playerSet, P1, SetP1, P2, SetP2, 'grazer')
                    }
                    }>
                        <div className="choosing-player04 choosing-player-config" />
                        <p>Grazer</p>
                    </div>
                </div>
            </div>
            <footer className="choosing-footer">
                <div className="choosing-p1">
                    <div
                        className={ renderPlayerChoosing(playerSet, 1) }
                        onClick={ () => { choosingPlayer(playerSet, setPlayer, 1) } }
                    >
                        <p id="choosing-player">PLAYER 01</p>
                        <p id="choosing-machine">
                            { renderPlayerMachine(P1) }
                        </p>
                    </div>
                </div>
                <div className="choosing-p2">
                    <div style={{ margin: 2 }}>
                        <div
                            className={ renderPlayerChoosing(playerSet, 2) }
                            onClick={ () => { choosingPlayer(playerSet, setPlayer, 2) } }
                        >
                            <div className="computer-icon">
                                <ComputerIcon />
                            </div>
                            <p id="choosing-player">PLAYER 02</p>
                            <p id="choosing-machine">
                                { renderPlayerMachine(P2) }
                            </p>
                        </div>
                    </div>
                </div>
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

const renderPlayerChoosing = (playerSet, player) => {
    return playerSet === player
        ? `choosing-p${ player }-box choosing-player-box-activated`
        : `choosing-p${ player }-box choosing-player-box-deactivated`
}

const renderPlayerMachine = (playerMachine) => {
    return playerMachine === ''
        ? '- - -'
        : ToTitle(playerMachine)
}

const choosingMachine = (playerSet, P1, setP1, P2, SetP2, machine) => {
    if (playerSet === 1) {
        if (machine === P2) {
            alert(`${ ToTitle(machine) } já foi escolhido pelo jogador 2!`)
        } else {
            if (machine != P1) {
                setP1(machine)
            }
        }
    } else {
        if (machine === P1){
            alert(`${ ToTitle(machine) } já foi escolhido pelo jogador 1!`)
        } else {
            if (machine != P2) {
                SetP2(machine)
            }
        }
    }
}

const choosingPlayer = (playerSet, setPlayer, playerOption) => {
    if (playerOption != playerSet) {
        setPlayer(playerOption)
    }
}

export default ChoosingScreen