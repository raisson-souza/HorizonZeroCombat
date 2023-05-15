import "./styles.css"

// COMPONENTS
import RandomNumber from "../../../../functions/RandomNumber"

// ASSETS
import {
    MachineAttacking1Gif,
    MachineAttacking2Gif,
    MachineAttacking3Gif,
    MachineWalking1Gif,
    MachineWalking2Gif,
} from "../../../../assets/index"

function SortedGif({ number }) {
    let borderClass

    switch (RandomNumber(5)) {
        case 1:
            borderClass = "borderClass01"
            break
        case 2:
            borderClass = "borderClass02"
            break
        case 3:
            borderClass = "borderClass03"
            break
        case 4:
            borderClass = "borderClass04"
            break
        case 5:
            borderClass = "borderClass05"
            break
        default:
            borderClass = "borderClass01"
            break
    }

    switch(number) {
        case 1:
            return <img src={ MachineAttacking1Gif } className={ borderClass } alt="MachineAttacking" />
        case 2:
            return <img src={ MachineAttacking2Gif } className={ borderClass } alt="MachineWalking2" />
        case 3:
            return <img src={ MachineAttacking3Gif } className={ borderClass } alt="MachineWalking3" />
        case 4:
            return <img src={ MachineWalking1Gif } className={ borderClass } alt="MachineWalking" />
        case 5:
            return <img src={ MachineWalking2Gif } className={ borderClass } alt="MachineWalking2" />
        default:
            return <img src={ MachineAttacking1Gif } className={ borderClass } alt="MachineAttacking" />
    }
}

export default SortedGif
