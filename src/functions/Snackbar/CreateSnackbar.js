function CreateSnackbar(snackbarId = '', snackbarInfo = {}, snackbars = {}, setSnackbars = () => {}) {
    const {
        text,
        autoClose,
        toCloseSeconds,
        closeIcon,
        type,
        position
    } = snackbarInfo

    const newSnackbar = [
        {
            text: text,
            autoClose: autoClose,
            toCloseSeconds: toCloseSeconds,
            closeIcon: closeIcon,
        },
        type,
        position
    ]

    const newSnackbars = { ...snackbars, [snackbarId]: newSnackbar}

    setSnackbars(newSnackbars)
}

export default CreateSnackbar
