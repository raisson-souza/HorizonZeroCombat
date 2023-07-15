class Machine {
    constructor(name, machinesInfo) {
        this.MachineRaw = this.findMachineInfo(name, machinesInfo)
        this.Name = name
        this.TotalLife = this.MachineRaw.life
        this.Life = this.MachineRaw.life
        this.TotalEnergy = this.MachineRaw.energy
        this.Energy = this.MachineRaw.energy
        this.AttackRange = [2, 4]
    }

    findMachineInfo(name = "", machinesInfos = {}) {
        for (const machine in machinesInfos) {
            if (machine === name) {
                return machinesInfos[machine]
            }
        }

        throw `Máquina "${ name }" não encontrada na lista de máquinas.`
    }
}

export default Machine
