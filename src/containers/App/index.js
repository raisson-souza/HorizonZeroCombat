import React, { useState } from "react";
import InitialScreen from "../InitialScreen";
import "./style.css"

import AloysThemeAudio from "../../assets/audios/aloys_theme.mp3"

function App() {
    const [ gameStarted, setGameState ] = useState(false)

    return (
        <div 
            className={ gameStarted ? "app-box" : null }
        >
            <div
                className="app-snackbar"
            >
                <p>
                    { gameStarted ? "Aloy's Theme" : null }
                </p>
                <audio src={ AloysThemeAudio } controls={ gameStarted } id="aloys-theme-audio"></audio>
            </div>
            {
                gameStarted
                    ? <p>Jogo Começou</p>
                    : <InitialScreen setGameState={ setGameState } />
            }
        </div>
    )
}

export default App