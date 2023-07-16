import "./styles.css"

// CLASSES
import Machine from "../../../../classes/machine"

// COMPONENTS
import IconComponent from "../../../../components/IconComponent"

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
            <IconComponent
                iconPath={ machine.MachineRaw.image }
                iconAlt={ `Máquina ${ machine.Name }` }
                iconWidth="50%"
            />
            <div className="machine-trait machine-life">
                ❤️
                <progress
                    max={ machine.TotalLife }
                    value={ machine.Life }
                />
                <p>
                    { `${ machine.TotalLife } / ${ machine.Life }` }
                </p>
            </div>
            <div className="machine-trait machine-energy">
                🧪
                <progress
                    max={ machine.TotalEnergy }
                    value={ machine.Energy }
                />
                <p>
                    { `${ machine.TotalEnergy } / ${ machine.Energy }` }
                </p>
            </div>
            <div className="machine-hability">
                <IconComponent
                    iconPath={ machine.MachineRaw.habilityIcon }
                    iconAlt={ `${ machine.Name }'s ${ machine.MachineRaw.habilityName }` }
                    iconWidth="50px"
                />
            </div>
        </div>
    )
}

export default BattleArea
