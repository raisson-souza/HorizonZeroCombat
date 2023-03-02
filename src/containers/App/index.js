import React, { useState } from "react"
import "./style.css"

// SCREENS
import InitialScreen from "../InitialScreen"
import LoadingScreen from "../LoadingScreen"

// AUDIOS
import AloysThemeSongSnackbar from "../../components/AloysThemeSongSnackbar"

function App() {
    const [ gameState, setGameState ] = useState("home")

    return (
        <div className={ gameState !== "home" ? "app-box" : null }>
            <AloysThemeSongSnackbar gameState={ gameState }/>
            { RenderGameScreen(gameState, setGameState) }
        </div>
    )
}

const RenderGameScreen = (gameState, setGameState) => {
    switch (gameState) {
        case "home":
            return <InitialScreen setGameState={ setGameState } />
        case "loading":
            return <LoadingScreen setGameState={ setGameState } />
        case "battle":
            return <p>TELA DE BATALHA</p>
        case "ending":
            return <p>VITÓRIA OU DERROTA</p>
        case "credits":
            return <p>CRÉDITOS</p>
        default:
            return <InitialScreen setGameState={ setGameState } />
    }
}

export default App