import "./styles.css"

function BackgroundModalComponent({ modalsStatesList, isActive }) {
    return (
        <div
            className="modal-component-background"
            style={ { display: isActive ? 'unset' : 'none' } }
            onClick={ () => { HandleChildrenModalsComponents(modalsStatesList) } }
        ></div>
    )
}

const HandleChildrenModalsComponents = (modalsStatesList) => {
    modalsStatesList.forEach(value => {
        if (value[0]) value[1](false)
    });
}

export default BackgroundModalComponent
