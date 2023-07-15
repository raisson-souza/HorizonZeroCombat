import Machine from "../../../../classes/machine"
import "./styles.css"

function BattleArea({
    machine = new Machine(),
    id = Number
}) {

    const RenderBattleAreaStyle = () => {
        if (id === 1) {
            return {
                alignSelf: "flex-start",
                paddingTop: 0
            }
        }

        return {
            alignSelf: "flex-end",
            paddingBottom: 30
        }
    }

    return (
        <div
            id={ `battle-area-${ id }` }
            className="battle-area"
            style={ RenderBattleAreaStyle( )}
        >
            <img
                className="machine-image"
                alt={ `Máquina ${ machine.Name }`}
                src={ machine.MachineRaw.image }
            />
            <div className="machine-trait machine-life">
                ❤️
                <progress
                    max={ machine.TotalLife }
                    value={ machine.Life }
                />
                { `${ machine.TotalLife } / ${ machine.Life }` }
            </div>
            <div className="machine-trait machine-energy">
                🧪
                <progress
                    max={ machine.TotalEnergy }
                    value={ machine.Energy }
                />
                { `${ machine.TotalEnergy } / ${ machine.Energy }` }
            </div>
            <div className="machine-hability">
                <img
                    alt={ `${ machine.Name }'s ${ machine.MachineRaw.habilityName }` }
                    src={ machine.MachineRaw.habilityIcon }
                />
            </div>
        </div>
    ) // ver se tem componente de icone
}

export default BattleArea
