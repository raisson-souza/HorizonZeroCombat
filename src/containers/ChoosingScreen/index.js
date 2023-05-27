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

function ChoosingScreen({ setGameState, setBackgroundActive }) {
    const [ playerSet, setPlayer ] = useState(1)
    const [ P1, SetP1 ] = useState('')
    const [ P2, SetP2 ] = useState('')
    const [ isP2Machine, setIsP2Machine ] = useState(false)

    const [ machine1Modal, setMachine1Modal ] = useState(false)
    const [ machine2Modal, setMachine2Modal ] = useState(false)
    const [ machine3Modal, setMachine3Modal ] = useState(false)
    const [ machine4Modal, setMachine4Modal ] = useState(false)

    useEffect(() => {
        // FIX dependency array
        // FIX all fixes
        setBackgroundActive(machine1Modal || machine2Modal || machine3Modal || machine4Modal)
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

    return (
        <>
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

const RenderModals = (modalsList = [], modalsStatesList = []) => {
    return [...Array(modalsList.map((_, i) => (
        modalsStatesList[i][0]
            ? (
                <ModalComponent
                    title={ modalsList[i][0] }
                    modalId={ modalsList[i][1] }
                    modalKey={ i + 1 }
                    content={ modalsList[i][2] }
                    isOpen={ modalsStatesList[i][0] }
                    setIsOpen={ modalsStatesList[i][1] }
                    height={ modalsList[i][3] }
                    width={ modalsList[i][4] }
                    backgroundColor={ modalsList[i][5] }
                    headerBackgroundColor={ modalsList[i][6] }
                    textFontSize={ modalsList[i][7] }
                    textColor={ modalsList[i][8] }
                    hasCloseButton={ modalsList[i][9] }
                    key={ i }
                />
            )
            : null
    )))]
}

export default ChoosingScreen
