import {
    WatcherImage,
    StriderImage,
    ScrapperImage,
    GrazerImage,
    MarkedTestTubeIcon,
    StunIcon,
    BrokenTestTubeIcon,
    BrokenSwordIcon,
} from "../assets/index"

import Modals from "./modals"

const MachinesList = [
    "watcher",
    "strider",
    "scrapper",
    "grazer",
]

const MachinesInfos = {
    "watcher": {
        life: 10,
        energy: 25,
        attackRange: [2, 4],
        image: WatcherImage,
        modal: Modals.watcher,
        habilityName: "Lock Biofuel", // incluir habilidades do poder
        habilities: {
            price: 5,
            attack: 6,
            hability: "energy-block",
        },
        habilityIcon: MarkedTestTubeIcon,
    },
    "strider": {
        life: 15,
        energy: 20,
        attackRange: [3, 5],
        image: StriderImage,
        modal: Modals.strider,
        habilityName: "Stun",
        habilities: {
            price: 5,
            attack: 5,
            hability: "stun",
        },
        habilityIcon: StunIcon,
    },
    "scrapper": {
        life: 20,
        energy: 15,
        attackRange: [4, 6],
        image: ScrapperImage,
        modal: Modals.scrapper,
        habilityName: "Damage Biofuel",
        habilities: {
            price: 5,
            attack: 6,
            hability: "energy-lose-5",
        },
        habilityIcon: BrokenTestTubeIcon,
    },
    "grazer": {
        life: 20,
        energy: 10,
        attackRange: [3, 5],
        image: GrazerImage,
        modal: Modals.grazer,
        habilityName: "Disable Attack",
        habilities: {
            price: 5,
            attack: 5,
            hability: "attack-block",
        },
        habilityIcon: BrokenSwordIcon,
    }
}

export {
    MachinesList,
    MachinesInfos,
}
