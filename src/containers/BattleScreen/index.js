import { useState } from "react"
import "./styles.css"

// COMPONENTS
import BattleArea from "./components/BattleArea"
import BattlePowerUps from "./components/BattlePowerUps"

// DATA
import { MachinesInfos } from "../../data/machines"

// CLASSES
import Props from "../../classes/props"
import Machine from "../../classes/machine"

function BattleScreen({ props = new Props() }) {
    const {
        P1,
        P2,
        // DEVELOPMENT,
    } = props

    const [ M1, SetM1 ] = useState(new Machine(P1, MachinesInfos))
    const [ M2, SetM2 ] = useState(new Machine(P2, MachinesInfos))

    const innerProps = {
        props: props,
        M1: M1,
        M2: M2,
        SetM1: SetM1,
        SetM2: SetM2,
    }

    if (M1.Life <= 0 || M2.Life <= 0) {
        props.setGameState("ending")
    }

    return ( // responsividade!
        <div className="battle-box">
            <header>
                <p>Horizon&ensp;Zero<span>&ensp;Combat</span></p>
            </header>
            <section>
                <div className="battle-section">
                    <div className="battle-line-division"></div>
                    <BattleArea machine={ M1 } id={ 1 } />
                    <BattleArea machine={ M2 } id={ 2 } />
                </div>
            </section>
            <footer>
                <div className="battle-power-ups">
                    <BattlePowerUps props={ innerProps } />
                </div>
            </footer>
        </div>
    )
}

export default BattleScreen
