import React, { useState } from "react"
import "./styles.css"

// SCREENS
import InitialScreen from "../InitialScreen"
import LoadingScreen from "../LoadingScreen"
import ChoosingScreen from "../ChoosingScreen"

// COMPONENTS
import AloysThemeSongSnackbar from "../../components/AloysThemeSongSnackbar"
import BackgroundModalComponent from "../../components/BackgroundModalComponent"

function App() {
    const [ gameState, setGameState ] = useState("home")
    const [ backgroundActive, setBackgroundActive ] = useState(false)

    return (
        <div className={ gameState !== "home" ? "app-box" : null }>
            <AloysThemeSongSnackbar gameState={ gameState }/>
            { RenderBackgroundModalComponent(backgroundActive) }
            { RenderGameScreen(gameState, setGameState, setBackgroundActive) }
        </div>
    )
}

const RenderGameScreen = (gameState, setGameState, setBackgroundActive) => {
    switch (gameState) {
        case "home":
            return <InitialScreen setGameState={ setGameState } />
        case "loading":
            return <LoadingScreen setGameState={ setGameState } />
        case "choosing":
            return (
                <ChoosingScreen
                    setGameState={ setGameState }
                    setBackgroundActive={ setBackgroundActive }
                />
            )
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

const RenderBackgroundModalComponent = (backgroundActive) => {
    return backgroundActive
        ? (
            <BackgroundModalComponent
                isActive={ true }
            />
        )
        : null
}

export default App
