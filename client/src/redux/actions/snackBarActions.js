import {CLOSE_SNACKBAR, SHOW_SNACKBAR } from "../typeConstants/snackBarTypeConstants"

export const showSnakcBar = (message, severity) => {
    return {
        type: SHOW_SNACKBAR,
        payload: {message, severity}
    }
}

export const closeSnackBar = () => {
    return {
        type: CLOSE_SNACKBAR
    }
}