import React, { useState } from "react";
import InitialScreen from "../InitialScreen";
import "./style.css"

import LoadingScreen from "../LoadingScreen";
import AloysThemeSongSnackbar from "../../components/AloysThemeSongSnackbar";

function App() {
    const [ gameStarted, setGameState ] = useState(false)
    const [ loading, setLoading ] = useState(true)

    return (
        <div 
            className={ gameStarted ? "app-box" : null }
        >
            <AloysThemeSongSnackbar gameStarted={ gameStarted }/>
            {
                gameStarted
                    ? loading
                        ? <LoadingScreen setLoading={ setLoading } />
                        : <p>Batalha</p>
                    : <InitialScreen setGameState={ setGameState } />
            }
        </div>
    )
}

export default App