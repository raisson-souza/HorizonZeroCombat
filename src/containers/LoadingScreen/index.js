import React, { useState, useEffect } from "react"
import "./styles.css"

// FUNCTIONS
import RandomNumber from "../../functions/RandomNumber"

// GIFS
import {
    MachineAttacking1Gif,
    MachineAttacking2Gif,
    MachineAttacking3Gif,
    MachineWalking1Gif,
    MachineWalking2Gif,
} from "../../assets/index"

// COMPONENTS
import PlayButton from "./components/PlayButton"
import LoadingComponent from "./components/LoadingComponent"

function LoadingScreen({ setGameState }) {
    const [ gif, setGif               ] = useState(1)
    const [ clueNumber, setClueNumber ] = useState(0)
    const [ barCount, setBarCount     ] = useState(11)

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

    return (
        <div className="loading-box">
            <div className="loading-clue">
                <SortedGif number={ gif } />
                <SortedClue number={ clueNumber  } />
            </div>
            {
                barCount > 10
                    ? <PlayButton setGameState={ setGameState } />
                    : <LoadingComponent barCount={ barCount } />
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
            return <img src={ MachineAttacking1Gif } className={ borderClass } alt="MachineAttacking" />
        case 2:
            return <img src={ MachineAttacking2Gif } className={ borderClass } alt="MachineWalking2" />
        case 3:
            return <img src={ MachineAttacking3Gif } className={ borderClass } alt="MachineWalking3" />
        case 4:
            return <img src={ MachineWalking1Gif } className={ borderClass } alt="MachineWalking" />
        case 5:
            return <img src={ MachineWalking2Gif } className={ borderClass } alt="MachineWalking2" />
        default:
            return <img src={ MachineAttacking1Gif } className={ borderClass } alt="MachineAttacking" />
    }
}

export default LoadingScreen
