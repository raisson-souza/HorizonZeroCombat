import { useEffect } from "react"
import "./styles.css"

// ASSETS
import { CloseIcon } from "../../assets"

function ModalComponent({
    title,
    modalId,
    content = <></>,
    isOpen = false,
    setIsOpen = () => {},
    height = '25vh',
    width = '25vw',
    backgroundColor = 'darkblue',
    headerBackgroundColor = 'blue',
    textFontSize = 18,
    textColor = 'white',
    hasCloseButton = true,
    closeOnOutsideClick = true,
}) {
    useEffect(() => {
        const node = document.getElementById("modal-component-background")

        try {
            node.addEventListener("click", () => { handleOutsideClick(closeOnOutsideClick, setIsOpen) })
        } catch { }
    })

    return (
        <div
            className="modal-component"
            id={ modalId }
            style={ {
                display: isOpen ? 'auto' : 'none',
                height: height,
                width: width,
                backgroundColor: backgroundColor,
            } }
        >
            <div
                className="modal-component-header"
                style={ {
                    backgroundColor: headerBackgroundColor,
                    fontSize: textFontSize,
                    color: textColor,
                } }
            >
                <p>{ title }</p>
                {
                    hasCloseButton
                        ? RenderCloseIcon(setIsOpen)
                        : null
                }
            </div>
            <div className="modal-component-content">
                { content }
            </div>
        </div>
    )
}

const RenderCloseIcon = (setIsOpen) => {
    return (
        <div
            className="modal-component-close-icon"
            onClick={ () => { setIsOpen(false) } }
        >
            <CloseIcon
                cursor="pointer"
                size={ 25 }
            />
        </div>
    )
}

const handleOutsideClick = (closeOnOutsideClick, setIsOpen) => {
    return closeOnOutsideClick
        ? setIsOpen(false)
        : null
}

export default ModalComponent
