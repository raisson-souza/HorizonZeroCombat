import React, { useState } from "react"
import "./styles.css"

// FUNCTIONS
import PlayAudio from "../../../../functions/AloysAudio/PlayAudio"

// ASSETS
import { PlayArrowIconSvg } from "../../../../assets/index"

function PlayButton({ setGameState }) {
    const [ hover, setHover ] = useState(false)

    return (
        <div className="loading-play">
            <p>Jogar</p>
            <div className="loading-playicon"
                onMouseEnter={ () => { setHover(true) } }
                onMouseLeave={ () => { setHover(false) } }
                onClick={ () => { StartBattle(setGameState) } }
            >
                <PlayArrowIconSvg
                    size={ hover ? 120 : 100 }
                    cursor="pointer"
                    fill="#4FBF26"
                />
            </div>
        </div>
    )
}

const StartBattle = (setGameState) => {
    PlayAudio()
    setGameState("choosing")
}

export default PlayButton
