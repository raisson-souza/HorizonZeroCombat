import "./styles.css"
import { 
    useEffect,
    // useState 
} from "react"
import { CloseIcon } from "../../assets"
import RemoveSnackbar from "../../functions/Snackbar/RemoveSnackbar"
import TooltipComponent from "../TooltipComponent"

function SnackbarComponent({
    snackbars = {},
    setSnackbars = () => {},
    snackbar = {},
    type = "error" || "warning" || "ok",
    position = "upperRight" || "upperLeft" || "downRight" || "downLeft",
    id = "",
}) {
    const {
        text,
        autoClose,
        toCloseSeconds,
        closeIcon,
    } = snackbar

    // const [ order, setOrder ] = useState(0)

    useEffect(() => {
        if (autoClose) {
            setTimeout(() => { RemoveSnackbar(id, snackbars, setSnackbars) }, toCloseSeconds * 1000)
        }

        // let samePositionSnackbars = 0

        // for (let snackbar in snackbars) {
        //     console.log('position', position, 'snackbar', snackbar)
        //     if (snackbar === position) samePositionSnackbars++
        // }

        // setOrder(samePositionSnackbars)
    })

    // usar o order para calcular a distancia de cada snackbar caso haja mais de uma
    // cuidar caso exista mais de uma snackbar na mesma posição

    const styles = MountStyle(position, type)

    return (
        <div
            className="snackbar-component"
            style={ styles }
        >
            <p>
                <b>
                    { text }
                </b>
            </p>
            {
                RenderCloseIcon(closeIcon, id, snackbars, setSnackbars)
            }
        </div>
    )
}

const RenderTypeColor = (type) => {
    switch (type) {
        case "error":
            return "red"
        case "warning":
            return "orange"
        case "ok":
            return "darkgreen"
        default:
            return "red"
    }
}

const MountStyle = (position, type) => {
    let obj = {}

    switch (position) {
        case 'upperRight':
            obj.left = '0%'
            obj.top = '0%'
            obj.transform = 'translate(30px, 30px)'
            break

        case 'upperLeft':
            obj.right = '0%'
            obj.top = '0%'
            obj.transform = 'translate(-30px, 30px)'
            break

        case 'downRight':
            obj.left = '0%'
            obj.bottom = '0%'
            obj.transform = 'translate(30px, -30px)'
            break

        case 'downLeft':
            obj.right = '0%'
            obj.bottom = '0%'
            obj.transform = 'translate(-30px, -30px)'
            break

        default:
            obj.left = '0%'
            obj.bottom = '0%'
            obj.transform = 'translate(30px, -30px)'
    }

    obj.backgroundColor = RenderTypeColor(type)

    return obj
}

const RenderCloseIcon = (closeIcon, id, snackbars, setSnackbars) => {
    return closeIcon
        ? (
            <div
                id={ `snackbar-${ id }-close-icon` }

                onClick={ () => { HandleClick(id, snackbars, setSnackbars) } }
            >
                <TooltipComponent
                    text="Fechar"
                    id="close-icon-snackbar"
                    arrow
                    fontSize={ 13 }
                    content={
                        <CloseIcon
                            cursor="pointer"
                        />
                    }
                />
            </div>
        )
        : null
}

const HandleClick = (id, snackbars, setSnackbars) => {
    RemoveSnackbar(id, snackbars, setSnackbars)
}

export default SnackbarComponent
