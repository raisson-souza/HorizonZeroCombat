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
import BattleScreen from "../BattleScreen"

function App() {
    // Determina se o modo de jogo é DESENVOLVIMENTO
    const DEVELOPMENT = true

    // Armazena a tela atual do jogo
    const [ gameState, setGameState ] = useState("home")

    // Determina se o background de suporte do ModalComponent está ativo
    const [ backgroundActive, setBackgroundActive ] = useState(false)

    // Determina
    const [ snackbars, setSnackbars ] = useState({})

    // Máquina escolhida
    const [ P1, SetP1 ] = useState(DEVELOPMENT ? 'watcher' : '')
    const [ P2, SetP2 ] = useState(DEVELOPMENT ? 'strider' : '')

    // Encapsulamento dos States dentro de Props
    const props = {
        gameState: gameState,
        setGameState: setGameState,
        backgroundActive: backgroundActive,
        setBackgroundActive: setBackgroundActive,
        snackbars: snackbars,
        setSnackbars: setSnackbars,
        DEVELOPMENT: DEVELOPMENT,
        P1: P1,
        SetP1: SetP1,
        P2: P2,
        SetP2: SetP2,
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
            return <BattleScreen   props={ props } />
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
