import React from "react"
import "./styles.css"

import AloysThemeAudio from "../../assets/audios/aloys_theme.mp3"

export default function AloysThemeSongSnackbar({ gameStarted }) {
    return (
        <div
            className="app-snackbar"
        >
            <p>
                { gameStarted ? "Aloy's Theme" : null }
            </p>
            <audio src={ AloysThemeAudio } controls={ gameStarted } id="aloys-theme-audio"></audio>
        </div>
    )
}