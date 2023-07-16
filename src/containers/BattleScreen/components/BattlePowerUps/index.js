import "./styles.css"

// COMPONENT
import IconComponent from "../../../../components/IconComponent"
import TooltipComponent from "../../../../components/TooltipComponent"

// ASSETS
import {
    SwordIcon,
    ShieldIconSvg,
    CloseIcon,
    PauseIcon
} from "../../../../assets"

function BattlePowerUps({ props }) {
    // mudar nome do componente
    // ao sair ou pausar, abrir modal de confirmação e de despause, respectivamente
    // efeito de disabled nos botoes quando nao for nossa rodada
    return (
        <div className="battle-power-ups">
            <div className="battle-primary-moves">
                { SwordButton }
                { ShieldButton }
            </div>
            <div className="division"></div>
            <div className="battle-power-ups">
                <p>Random Power Ups</p>
            </div>
            <div className="division"></div>
            <div className="battle-config">
                { CancelButton }
                { PauseButton }
            </div>
        </div>
    )
}

const SwordButton = (
    <TooltipComponent
        text="Atacar"
        id="attack-icon-battle"
        arrow
        fontSize={ 13 }
        content={
            <IconComponent
                iconPath={ SwordIcon }
                iconAlt="sword-icon"
                iconWidth="50px"
            />
        }
    />
)

const ShieldButton = (
    <TooltipComponent
        text="Defender"
        id="defend-icon-battle"
        arrow
        fontSize={ 13 }
        content={
            <ShieldIconSvg
                size={ 60 }
                cursor="pointer"
            />
        }
    />
)

const CancelButton = (
    <TooltipComponent
        text="Cancelar Batalha"
        id="cancel-icon-battle"
        arrow
        fontSize={ 13 }
        content={
            <CloseIcon
                size={ 60 }
                cursor="pointer"
            />
        }
    />
)

const PauseButton = (
    <TooltipComponent
        text="Pausar Batalha"
        id="pause-icon-battle"
        arrow
        fontSize={ 13 }
        content={
            <IconComponent
                iconPath={ PauseIcon }
                iconAlt="pause-icon"
                iconWidth="50px"
            />
        }
    />
)

export default BattlePowerUps
