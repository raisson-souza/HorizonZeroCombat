function SortedClue({ number }) {
    const clues = [
        "Mantenha seus níveis de Bio Massa sempre cheios.",
        "Fique longe de assentamentos humanos.",
        "Sempre obedeça Hephastus.",
        "Destrua Aloy."
    ]

    return <p>{ clues[number] }</p>
}

export default SortedClue
