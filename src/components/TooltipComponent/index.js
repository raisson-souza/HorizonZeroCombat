import { Tooltip } from "react-tooltip"

function TooltipComponent({
    text,
    id,
    fontSize = 18,
    clickable = false,
    arrow = true,
    onClick = (e) => { e.preventDefault() },
    content = <></>,
}) {
    return (
        <>
            <a
                data-tooltip-content={ text }
                data-tooltip-id={ id }
                onClick={ (e) => { onClick(e) }}
                style={ { fontSize: fontSize } }
                href=" "
            >
                { content }
            </a>
            <Tooltip
                id={ id }
                clickable={ clickable }
                noArrow={ !arrow }
                style={{ fontSize: fontSize }}
            />
        </>
    )
}

export default TooltipComponent
