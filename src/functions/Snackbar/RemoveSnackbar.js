function RemoveSnackbar(removeId = 0, snackbars = {}, setSnackbars = () => {}) {
    if (removeId in snackbars) {
        const newSnackbars = withoutProperty(snackbars, removeId)
        setSnackbars(newSnackbars)
    }
}

function withoutProperty(obj, property) {  
    const { [property]: unused, ...rest } = obj

    return rest
}

export default RemoveSnackbar
