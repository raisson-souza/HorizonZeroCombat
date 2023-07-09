import "./styles.css"

function BattleScreen({ props }) {
    const {
        // setGameState,
        P1,
        P2,
        // DEVELOPMENT,
    } = props

    return (
        <div>
            <h1>P1 {P1}</h1>
            <h1>P2 {P2}</h1>
        </div>
    )
}

export default BattleScreen
