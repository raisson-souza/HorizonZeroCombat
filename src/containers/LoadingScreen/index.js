import React, { useState, useEffect } from "react"
import "./styles.css"

// COMPONENTS
import PlayButton from "./components/PlayButton"
import LoadingComponent from "./components/LoadingComponent"
import SortedGif from "./components/SortedGif"
import SortedClue from "./components/SortedClue"

function LoadingScreen({ props }) {
    const {
        setGameState,
    } = props

    const loadingSeconds = (1 * 2) * 10 // (seconds x 2) x 10
    const [ gif, setGif                 ] = useState(1)
    const [ clueNumber, setClueNumber   ] = useState(0)
    const [ barProgress, setBarProgress ] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setClueNumber(oldValue => {
                if (oldValue === 3) return 1
                return oldValue + 1
            })
        }, 5000);

        setInterval(() => {
            setGif(oldValue => {
                if (oldValue === 5) return 1
                return oldValue + 1
            })
        }, 7000);

        const loadingBarInterval = setInterval(() => {
            setBarProgress(oldValue => {
                const newValue = oldValue + 10
                if (newValue >= loadingSeconds) clearInterval(loadingBarInterval)
                return oldValue + 10
            })
        }, 1000)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="loading-box">
            <div className="loading-clue">
                <SortedGif number={ gif } />
                <SortedClue number={ clueNumber  } />
            </div>
            {
                barProgress > loadingSeconds
                    ? <PlayButton setGameState={ setGameState } />
                    : <LoadingComponent barCount={ barProgress } barMax={ loadingSeconds }/>
            }
        </div>
    )
}

export default LoadingScreen
