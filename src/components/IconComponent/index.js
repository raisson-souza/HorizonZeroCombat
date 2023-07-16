import "./styles.css"

export default function IconComponent({
    iconPath,
    iconAlt,
    iconWidth
}) {
    // mudar nome para IconImageComponent
    return (
        <div className="icon-component">
            <img
                src={ iconPath }
                alt={ iconAlt }
                width={ iconWidth }
            />
        </div>
    )
}