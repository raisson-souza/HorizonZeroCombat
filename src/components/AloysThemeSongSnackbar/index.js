import React from "react"
import "./styles.css"

// AUDIOS
import { AloysThemeAudio } from "../../assets/index"

export default function AloysThemeSongSnackbar({ gameState }) {
    return (
        <div
            className={
                ActivateSnackbar(gameState)
                    ? "app-snackbar app-snackbar-on"
                    : "app-snackbar app-snackbar-off"
                }
        >
            <p>
                {
                    ActivateSnackbar(gameState)
                        ? "Aloy's Theme"
                        : null
                }
            </p>
            <audio
                src={ AloysThemeAudio }
                controls={ ActivateSnackbar(gameState) }
                id="aloys-theme-audio"
            >
            </audio>
        </div>
    )
}

const ActivateSnackbar = (gameState) => {
    if (gameState === "home" || gameState === "loading") return true
    return false
}
