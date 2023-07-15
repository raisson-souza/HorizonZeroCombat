import React from "react"
import "./styles.css"

// AUDIOS
import { AloysThemeAudio } from "../../assets/index"

// CLASSES
import Props from "../../classes/props"

export default function AloysThemeSongSnackbar({ props = new Props() }) {
    const {
        GameState,
        DEVELOPMENT,
    } = props

    return (
        <div
            className={
                ActivateSnackbar(GameState)
                    ? "app-snackbar app-snackbar-on"
                    : "app-snackbar app-snackbar-off"
                }
        >
            <p>
                {
                    ActivateSnackbar(GameState)
                        ? "Aloy's Theme"
                        : null
                }
            </p>
            <audio
                src={ AloysThemeAudio }
                controls={ ActivateSnackbar(GameState) }
                id="aloys-theme-audio"
                muted={ DEVELOPMENT }
            >
            </audio>
        </div>
    )
}

const ActivateSnackbar = (gameState) => {
    // Define quais telas a Snackbar da música da Aloy aparece
    const screens = ['home', 'loading', 'choosing']

    return screens.includes(gameState)
}
