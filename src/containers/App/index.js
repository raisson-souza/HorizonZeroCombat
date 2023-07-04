import React, { useState } from "react"
import "./styles.css"

// SCREENS
import InitialScreen from "../InitialScreen"
import LoadingScreen from "../LoadingScreen"
import ChoosingScreen from "../ChoosingScreen"

// COMPONENTS
import AloysThemeSongSnackbar from "../../components/AloysThemeSongSnackbar"
import BackgroundModalComponent from "../../components/BackgroundModalComponent"
import SnackbarComponent from "../../components/SnackbarComponent"

function App() {
    const [ gameState, setGameState ] = useState("home")
    const [ backgroundActive, setBackgroundActive ] = useState(false)
    const [ snackbars, setSnackbars ] = useState({})

    return (
        <div className={ gameState !== "home" ? "app-box" : null }>
            <AloysThemeSongSnackbar gameState={ gameState }/>
            {
                RenderBackgroundModalComponent(backgroundActive)
            }
            {
                RenderGameScreen(gameState, setGameState, setBackgroundActive, snackbars, setSnackbars)
            }
            {
                RenderSnackbars(snackbars, setSnackbars)
            }
        </div>
    )
}

const RenderGameScreen = (gameState, setGameState, setBackgroundActive, snackbars, setSnackbars) => {
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
                    snackbars={ snackbars }
                    setSnackbars={ setSnackbars }
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

const RenderSnackbars = (snackbars, setSnackbars) => {
    const components = []

    for (let snackbar in snackbars) {
        // snackbar é a chave de snackbars
        components.push(
            <SnackbarComponent
                snackbars={ snackbars }
                setSnackbars={ setSnackbars }
                snackbar={ snackbars[snackbar][0] }
                type={ snackbars[snackbar][1] }
                position={ snackbars[snackbar][2] }
                id={ snackbar }
                key={ snackbar }
            />
        )
    }

    return [...Array(components.length)].map((_, i) => (
        components[i]
    )) 
}

export default App
