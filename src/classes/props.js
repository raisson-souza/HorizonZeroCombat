class Props {
    constructor(
        gameState = "",
        setGameState = () => {},
        backgroundActive = false,
        setBackgroundActive = () => {},
        snackbars = {},
        setSnackbars = () => {},
        DEVELOPMENT = false,
        P1 = "",
        SetP1 = () => {},
        P2 = "",
        SetP2 = () => {},
    ) {
        this.GameState = gameState
        this.SetGameState = setGameState
        this.BackgroundActive = backgroundActive
        this.SetBackgroundActive = setBackgroundActive
        this.Snackbars = snackbars
        this.SetSnackbars = setSnackbars
        this.DEVELOPMENT = DEVELOPMENT
        this.P1 = P1
        this.SetP1 = SetP1
        this.P2 = P2
        this.SetP2 = SetP2
    }
}

export default Props
