import React, { useState } from "react"
import "./styles.css"

import StopAudio from "../../../../functions/AloysAudio/StopAudio"
import PlayArrow from "../../../../assets/svg/PlayArrow"

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
                <PlayArrow
                    size={ hover ? 120 : 100 }
                    cursor="pointer"
                    fill="#4FBF26"
                />
            </div>
        </div>
    )
}

const StartBattle = (setGameState) => {
    StopAudio()
    setGameState("choosing")
}

export default PlayButton
