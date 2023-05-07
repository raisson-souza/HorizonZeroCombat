import React from "react"

// FUNCTIONS
import StopAudio from "../../../../functions/AloysAudio/StopAudio"

function FightButton({
    P1,
    P2,
    setGameState,
}) {
    return (
        <p onClick={ () => { startFight(P1, P2, setGameState) } }>FIGHT !</p>
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
        StopAudio()
        setTimeout(() => {
            setGameState("battle")
        }, 1000)
    }
}

export default FightButton
