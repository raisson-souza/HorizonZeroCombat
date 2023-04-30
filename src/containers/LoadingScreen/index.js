import React, { useState, useEffect } from "react"
import "./styles.css"

// FUNCTIONS
import LoadingBar from "../../components/LoadingBar"
import RandomNumber from "../../functions/RandomNumber"
import StopAudio from "../../functions/AloysAudio/StopAudio"

// ICONS
import PlayArrow from "../../assets/svg/PlayArrow"

// GIFS
import MachineAttacking from "../../assets/gifs/machine_attacking.gif"
import MachineAttacking2 from "../../assets/gifs/machine_attacking2.gif"
import MachineAttacking3 from "../../assets/gifs/machine_attacking3.gif"
import MachineWalking from "../../assets/gifs/machine_walking.gif"
import MachineWalking2 from "../../assets/gifs/machine_walking2.gif"

function LoadingScreen({ setGameState }) {
    const [ gif, setGif               ] = useState(1)
    const [ clueNumber, setClueNumber ] = useState(0)
    const [ barCount, setBarCount     ] = useState(11)
    const [ hover, setHover           ] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            if (clueNumber === 3) setClueNumber(1)
            else setClueNumber(clueNumber + 1)
        }, 5000)

        setTimeout(() => {
            if (gif === 5) setGif(1)
            else setGif(gif + 1)
        }, 10000)

        setTimeout(() => {
            if (barCount <= 10) setBarCount(barCount + 1)
        }, 5000)
    })

    const StartBattle = () => {
        StopAudio()
        setGameState("choosing")
    }

    return (
        <div className="loading-box">
            <div className="loading-clue">
                <SortedGif number={ gif } />
                <SortedClue number={ clueNumber  } />
            </div>
            {
                barCount > 10
                    ? (
                        <div className="loading-play">
                            <p>Jogar</p>
                            <div className="loading-playicon"
                                onMouseEnter={ () => { setHover(true) } }
                                onMouseLeave={ () => { setHover(false) } }
                                onClick={ () => { StartBattle() } }
                            >
                                <PlayArrow
                                    size={ hover ? 120 : 100 }
                                    cursor="pointer"
                                    fill="#4FBF26"
                                />
                            </div>
                        </div>
                    )
                    : (
                        <div className="loading-bar-progress">
                            <LoadingBar level={ barCount } />
                            <p>Carregando...</p>
                        </div>
                    )
            }
        </div>
    )
}

const SortedClue = ({ number }) => {
    const clues = [
        "Mantenha seus níveis de Bio Massa sempre cheios.",
        "Fique longe de assentamentos humanos.",
        "Sempre obedeça Hephastus.",
        "Destrua Aloy."
    ]

    return <p>{ clues[number] }</p>
}

const SortedGif = ({ number }) => {
    let borderClass

    switch (RandomNumber(5)) {
        case 1:
            borderClass = "borderClass01"
            break
        case 2:
            borderClass = "borderClass02"
            break
        case 3:
            borderClass = "borderClass03"
            break
        case 4:
            borderClass = "borderClass04"
            break
        case 5:
            borderClass = "borderClass05"
            break
        default:
            borderClass = "borderClass01"
            break
    }

    switch(number) {
        case 1:
            return <img src={ MachineAttacking } className={ borderClass } alt="MachineAttacking" />
        case 2:
            return <img src={ MachineAttacking2 } className={ borderClass } alt="MachineWalking2" />
        case 3:
            return <img src={ MachineAttacking3 } className={ borderClass } alt="MachineWalking3" />
        case 4:
            return <img src={ MachineWalking } className={ borderClass } alt="MachineWalking" />
        case 5:
            return <img src={ MachineWalking2 } className={ borderClass } alt="MachineWalking2" />
        default:
            return <img src={ MachineAttacking } className={ borderClass } alt="MachineAttacking" />
    }
}

export default LoadingScreen