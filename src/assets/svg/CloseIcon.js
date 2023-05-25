function CloseIcon({
    size = 24,
    fill = "#000000",
    cursor = "auto",
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={ size }
            width={ size }
            fill={ fill }
            viewBox="0 96 960 960"
            style={ { cursor: cursor } }
        >
            <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"></path>
        </svg>
    )
}

export default CloseIcon
