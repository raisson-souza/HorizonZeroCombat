import React, { useState, useEffect } from "react"
import "./styles.css"

// COMPONENTS
import Machine from "./components/Machine"
import PlayerButton from "./components/PlayerButton"
import MachineButton from "./components/MachineButton"
import FightButton from "./components/FightButton"
import ModalComponent from "../../components/ModalComponent"

// MODALS
import Modals from "../../data/modals"

// DATA
import {
    MachinesList,
    MachinesInfos,
} from "../../data/machines"

function ChoosingScreen({ props }) {
    const {
        setGameState,
        setBackgroundActive,
        snackbars,
        setSnackbars,
        P1,
        SetP1,
        P2,
        SetP2,
    } = props

    // Jogador atual
    const [ playerSet, setPlayer ] = useState(1)

    // Determina se o jogador 2 é máquina
    const [ isP2Machine, setIsP2Machine ] = useState(false)

    // Estado de ativação do modal de cada máquina
    const [ machine1Modal, setMachine1Modal ] = useState(false)
    const [ machine2Modal, setMachine2Modal ] = useState(false)
    const [ machine3Modal, setMachine3Modal ] = useState(false)
    const [ machine4Modal, setMachine4Modal ] = useState(false)

    useEffect(() => {
        setBackgroundActive(machine1Modal || machine2Modal || machine3Modal || machine4Modal)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [machine1Modal, machine2Modal, machine3Modal, machine4Modal])

    // Modais de cada máquina
    const modalsStatesList = [
        [machine1Modal, setMachine1Modal],
        [machine2Modal, setMachine2Modal],
        [machine3Modal, setMachine3Modal],
        [machine4Modal, setMachine4Modal],
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
                                MachinesInfos,
                                isP2Machine,
                                modalsStatesList,
                                snackbars,
                                setSnackbars,
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
                        machinesList={ MachinesList }
                    />
                    <div className="choosing-footer-area">
                        <FightButton
                            P1={ P1 }
                            P2={ P2 }
                            setGameState={ setGameState }
                            snackbars={ snackbars }
                            setSnackbars={ setSnackbars }
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
    machinesInfos,
    isP2Machine,
    setIsModalsOpen,
    snackbars,
    setSnackbars,
) => {
    return Object.keys(machinesInfos)
        .map((machine, i) => (
            <Machine
                playerSet={ playerSet }
                P1={ P1 }
                P2={ P2 }
                SetP1={ SetP1 }
                SetP2={ SetP2 }
                machineName={ machine }
                machineImage={ machinesInfos[machine]["image"] }
                machineLife={ machinesInfos[machine]["life"] }
                machineEnergy={ machinesInfos[machine]["energy"] }
                machineAttack={ Math.round(
                    machinesInfos[machine]["attackRange"][0] + machinesInfos[machine]["attackRange"][1] / 2
                ) }
                iconName={ machinesInfos[machine]["habilityName"] }
                iconImage={ machinesInfos[machine]["habilityIcon"] }
                isP2Machine={ isP2Machine }
                setModalIsOpen={ setIsModalsOpen[i][1] }
                snackbars={ snackbars }
                setSnackbars={ setSnackbars }
                key={ i }
            />
        ))
}

const RenderModals = (modalsList = {}, modalsStatesList = []) => {
    return Object.keys(modalsList)
        .map((modal, i) => (
            modalsStatesList[i][0]
                ? (
                    <ModalComponent
                        title={ modalsList[modal]["title"] }
                        modalId={ modalsList[modal]["className"] }
                        content={ modalsList[modal]["content"] }
                        height={ modalsList[modal]["height"] }
                        width={ modalsList[modal]["width"] }
                        backgroundColor={ modalsList[modal]["backgroundColor"] }
                        headerBackgroundColor={ modalsList[modal]["headerBackgroundColor"] }
                        textFontSize={ modalsList[modal]["textFontSize"] }
                        textColor={ modalsList[modal]["textColor"] }
                        hasCloseButton={ modalsList[modal]["hasCloseButton"] }
                        closeOnOutsideClick={ modalsList[modal]["closeOnOutsideClick"] }
                        isOpen={ modalsStatesList[i][0] }
                        setIsOpen={ modalsStatesList[i][1] }
                        key={ i }
                    />
                )
                : null
        ))
}

export default ChoosingScreen
