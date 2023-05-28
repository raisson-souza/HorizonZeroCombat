import "./styles.css"

function BackgroundModalComponent({ isActive }) {
    return (
        <div
            className="modal-component-background"
            id="modal-component-background"
            style={ { display: isActive ? 'unset' : 'none' } }
        ></div>
    )
}

export default BackgroundModalComponent
