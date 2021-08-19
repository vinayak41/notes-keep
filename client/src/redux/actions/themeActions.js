import {CHANGE_THEME} from "../typeConstants/themeTypeConstants"
export const changeTheme = (theme) => {
    return {
        type: CHANGE_THEME,
        payload: theme
    }
}