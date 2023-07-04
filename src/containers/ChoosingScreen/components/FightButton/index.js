import React from "react"

// FUNCTIONS
import StopAudio from "../../../../functions/AloysAudio/StopAudio"
import CreateSnackbar from "../../../../functions/Snackbar/CreateSnackbar"

function FightButton({
    P1,
    P2,
    setGameState,
    snackbars,
    setSnackbars,
}) {
    return (
        <p onClick={ () => { startFight(P1, P2, setGameState, snackbars, setSnackbars) } }>FIGHT !</p>
    )
}

const startFight = (P1, P2, setGameState, snackbars, setSnackbars) => {
    if (P1 === "" && P2 === "") {
        if (snackbars['NoMachinesToFight'] === undefined)
            CreateSnackbar(
                'NoMachinesToFight',
                {
                    text: "Nenhuma máquina escolhida por nenhum jogador!",
                    autoClose: true,
                    toCloseSeconds: 4,
                    closeIcon: false,
                    type: "warning",
                    position: "upperLeft"
                },
                snackbars,
                setSnackbars)
    } else if (P1 === "") {
        if (snackbars['Player01NoMachine'] === undefined)
            CreateSnackbar(
                'Player01NoMachine',
                {
                    text: "Jogador 1 não escolheu uma máquina!",
                    autoClose: true,
                    toCloseSeconds: 4,
                    closeIcon: false,
                    type: "warning",
                    position: "upperLeft"
                },
                snackbars,
                setSnackbars)
    } else if (P2 === "") {
        if (snackbars['Player02NoMachine'] === undefined)
            CreateSnackbar(
                'Player02NoMachine',
                {
                    text: "Jogador 2 não escolheu uma máquina!",
                    autoClose: true,
                    toCloseSeconds: 4,
                    closeIcon: false,
                    type: "warning",
                    position: "upperLeft"
                },
                snackbars,
                setSnackbars)
    } else {
        StopAudio()
        setTimeout(() => {
            setGameState("battle")
        }, 1000)
    }
}

export default FightButton
