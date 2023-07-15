import React, { useState } from "react"
import "./styles.css"

// ASSETS
import { PlayCircleIconSvg } from "../../assets/index"

// FUNCTIONS
import PlayAudio from "../../functions/AloysAudio/PlayAudio"

// CLASSES
import Props from "../../classes/props"

function InitialScreen({ props = new Props() }) {
    const {
        SetGameState,
        DEVELOPMENT,
    } = props

    const [ hover, setHover ] = useState(false)

    const gameStart = () => {
        PlayAudio()
        setTimeout(() => {
            if (DEVELOPMENT) SetGameState("choosing")
            else SetGameState("loading")
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
                                <PlayCircleIconSvg
                                    size={ 80 }
                                    fill="#fff"
                                    cursor="pointer"
                                />
                            )
                            : (
                                <PlayCircleIconSvg
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