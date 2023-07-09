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
    const DEVELOPMENT = true

    // Encapsulamento dos States dentro de Props
    const props = {
        gameState: gameState,
        setGameState: setGameState,
        backgroundActive: backgroundActive,
        setBackgroundActive: setBackgroundActive,
        snackbars: snackbars,
        setSnackbars: setSnackbars,
        DEVELOPMENT: DEVELOPMENT,
    }

    return (
        <div
            className={ RenderOuterDivClassName(gameState) }
        >
            <AloysThemeSongSnackbar props={ props }/>
            {
                RenderBackgroundModalComponent(props)
            }
            {
                RenderGameScreen(props)
            }
            {
                RenderSnackbars(props)
            }
        </div>
    )
}

// Renderiza a tela atual do jogo
const RenderGameScreen = (props) => {

    // Todos os States são passados por dentro de props
    switch (props.gameState) {
        case "home":
            return <InitialScreen  props={ props } />
        case "loading":
            return <LoadingScreen  props={ props } />
        case "choosing":
            return <ChoosingScreen props={ props } />
        case "battle":
            return <p>TELA DE BATALHA</p>
        case "ending":
            return <p>VITÓRIA OU DERROTA</p>
        case "credits":
            return <p>CRÉDITOS</p>
        default:
            return <InitialScreen  props={ props } />
    }
}

// Renderiza o Background de suporte do ModalComponent dos modais das máquinas
const RenderBackgroundModalComponent = (props) => {
    return props.backgroundActive
        ? (
            <BackgroundModalComponent
                isActive={ true }
            />
        )
        : null
}

// Renderiza as Snackbars presentes na tela
const RenderSnackbars = (props) => {
    const {
        snackbars,
        setSnackbars,
    } = props

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

const RenderOuterDivClassName = (gameState) => { // verificar funcionalidade
    return gameState !== "home"
        ? "app-box"
        : null
}

export default App
