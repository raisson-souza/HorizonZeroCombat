import "./styles.css"

import { CloseIcon } from "../../assets"

function ModalComponent(
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
    key,
) {
    // FIX variavel se for da choosingscreen para parar e tocar o audio da aloy
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
            key={ key }
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

export default ModalComponent
