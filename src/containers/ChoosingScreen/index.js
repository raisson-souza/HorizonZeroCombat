import React, { useState, useEffect } from "react"
import "./styles.css"

// ASSETS
import {
    WatcherImage,
    StriderImage,
    ScrapperImage,
    GrazerImage,
    MarkedTestTubeIcon,
    StunIcon,
    BrokenTestTubeIcon,
    BrokenSwordIcon,
} from "../../assets/index"

// COMPONENTS
import Machine from "./components/Machine"
import PlayerButton from "./components/PlayerButton"
import MachineButton from "./components/MachineButton"
import FightButton from "./components/FightButton"
import ModalComponent from "../../components/ModalComponent"

// MODALS
import Modals from "./modals"
import BackgroundModalComponent from "../../components/BackgroundModalComponent"

function ChoosingScreen({ setGameState }) {
    const [ playerSet, setPlayer ] = useState(1)
    const [ P1, SetP1 ] = useState('')
    const [ P2, SetP2 ] = useState('')
    const [ isP2Machine, setIsP2Machine ] = useState(false)

    const [ machine1Modal, setMachine1Modal ] = useState(false)
    const [ machine2Modal, setMachine2Modal ] = useState(false)
    const [ machine3Modal, setMachine3Modal ] = useState(false)
    const [ machine4Modal, setMachine4Modal ] = useState(false)
    const [ modalComponentBlock, setModalComponentBlock ] = useState(false)

    useEffect(() => {
        setModalComponentBlock(machine1Modal || machine2Modal || machine3Modal || machine4Modal)
    }, [machine1Modal, machine2Modal, machine3Modal, machine4Modal])

    const modalsStatesList = [
        [machine1Modal, setMachine1Modal],
        [machine2Modal, setMachine2Modal],
        [machine3Modal, setMachine3Modal],
        [machine4Modal, setMachine4Modal],
    ]

    const machinesList = [
        "watcher",
        "strider",
        "scrapper",
        "grazer",
    ]

    const machinesAndPathsList = [
        ["watcher", WatcherImage],
        ["strider", StriderImage],
        ["scrapper", ScrapperImage],
        ["grazer", GrazerImage],
    ]

    const iconsList = [
        ["Lock Biofuel", MarkedTestTubeIcon],
        ["Stun", StunIcon],
        ["Damage Biofuel", BrokenTestTubeIcon],
        ["Disable Attack", BrokenSwordIcon],
    ]
    // FIX - background no APP, passa o setState p os comps controlarem

    return (
        <>
            {/* FIX criar um render para só renderizar se existir um modal ativado */}
            <BackgroundModalComponent
                modalsStatesList={ modalsStatesList }
                isActive={ modalComponentBlock }
            />
            { RenderModals(Modals, modalsStatesList) }
            <div className="choosing-box">
                <header className="choosing-header">
                    Horizon Zero Combat
                </header>
                <div className="choosing-header-fake"></div>
                <div className="choosing-players-box">
                    <div className="choosing-players-messgage">
                        Escolha sua<br />Máquina
                    </div>
                    <div className="choosing-players-area">
                        {
                            RenderMachines(
                                playerSet,
                                P1,
                                P2,
                                SetP1,
                                SetP2,
                                machinesAndPathsList,
                                isP2Machine,
                                iconsList,
                                modalsStatesList
                            )
                        }
                    </div>
                </div>
                <footer className="choosing-footer">
                    <PlayerButton
                        playerSet={ playerSet }
                        setPlayer={ setPlayer }
                        player={ P1 }
                    />
                    <MachineButton
                        playerSet={ playerSet }
                        setPlayer={ setPlayer }
                        P2={ P2 }
                        SetP2={ SetP2 }
                        isP2Machine={ isP2Machine }
                        setIsP2Machine={ setIsP2Machine }
                        P1={ P1 }
                        machinesList={ machinesList }
                    />
                    <div className="choosing-footer-area">
                        <FightButton
                            P1={ P1 }
                            P2={ P2 }
                            setGameState={ setGameState }
                        />
                    </div>
                </footer>
            </div>
        </>
    )
}

const RenderMachines = (
    playerSet,
    P1,
    P2,
    SetP1,
    SetP2,
    machinesList,
    isP2Machine,
    iconsList,
    setIsModalsOpen,
) => {
    return [...Array(machinesList.length)].map((_, i) => (
        <Machine
            playerSet={ playerSet }
            P1={ P1 }
            P2={ P2 }
            SetP1={ SetP1 }
            SetP2={ SetP2 }
            machineName={ machinesList[i][0] }
            machineImage={ machinesList[i][1] }
            iconName={ iconsList != null ? iconsList[i][0] : null }
            iconImage={ iconsList != null ? iconsList[i][1] : null }
            isP2Machine={ isP2Machine }
            setModalIsOpen={ setIsModalsOpen[i][1] }
            key={ i }
        />
    ))
}

// verificar se esta renderizando pra nao gerar múltiplos
const RenderModals = (modalsList = [], modalsStatesList = []) => {
    return [...Array(modalsList.map((_, i) => (
        modalsStatesList[i][0]
            ? (
                ModalComponent(
                    modalsList[i][0],
                    modalsList[i][1],
                    modalsList[i][2],
                    modalsStatesList[i][0],
                    modalsStatesList[i][1],
                    modalsList[i][3],
                    modalsList[i][4],
                    modalsList[i][5],
                    modalsList[i][6],
                    modalsList[i][7],
                    modalsList[i][8],
                    modalsList[i][9],
                    i,
                )
            )
            : null
    )))]
}

const RenderModalBackground = (modalsStatesList, isActive)

export default ChoosingScreen
