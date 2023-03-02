import React, { useState } from "react"
import "./style.css"

// ICONS
import PlayCircle from "../../assets/svg/PlayCircle"

// FUNCTIONS
import PlayAudio from "../../functions/AloysAudio/PlayAudio"

function InitialScreen({ setGameState }) {
    const [ hover, setHover ] = useState(false)

    const gameStart = () => {
        PlayAudio()
        setTimeout(() => {
            setGameState("loading")
        }, 200)
    }

    return (
        <div className="initial-wrapper">
            <div className="initial-box"></div>
            <div className="initial-content initial-content-depth">
                <p>Horizon Zero Combat</p>
                <div
                    onMouseEnter={ () => { setHover(true) } }
                    onMouseLeave={ () => { setHover(false) } }
                    className="initial-content-icon"
                    onClick={ () => { gameStart() }}
                >
                    {
                        hover
                            ? (
                                <PlayCircle
                                    size={ 80 }
                                    fill="#fff"
                                    cursor="pointer"
                                />
                            )
                            : (
                                <PlayCircle
                                    size={ 60 }
                                    fill="#fff"
                                    cursor="pointer"
                                />
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default InitialScreen